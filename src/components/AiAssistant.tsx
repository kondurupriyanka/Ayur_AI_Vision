import React, { useState, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabaseClient';

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UserProfile {
  name: string;
  location: string;
  occupation: string;
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const AiAssistant: React.FC = () => {
  const { session } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (session?.user) {
      fetchUserProfile();
      fetchChatHistory();
    }
  }, [session]);

  const fetchUserProfile = async () => {
    if (!session?.user?.id) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('name, location, occupation')
        .eq('id', session.user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }

      // If no profile exists, set default values
      setUserProfile(data || {
        name: 'Anonymous',
        location: 'Unknown',
        occupation: 'Unknown'
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Set default values on error
      setUserProfile({
        name: 'Anonymous',
        location: 'Unknown',
        occupation: 'Unknown'
      });
    }
  };

  const fetchChatHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('user_id', session?.user.id)
        .order('timestamp', { ascending: true })
        .limit(50);

      if (error) throw error;

      const formattedMessages = data.map((chat): ChatMessage => ({
        id: chat.id,
        type: 'user',
        content: chat.message,
        timestamp: new Date(chat.timestamp),
      })).concat(data.map((chat): ChatMessage => ({
        id: `${chat.id}-response`,
        type: 'assistant',
        content: chat.response,
        timestamp: new Date(chat.timestamp),
      })));

      setMessages(formattedMessages);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !session) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const prompt = `You are an expert in Ayurvedic medicine and medicinal plants. The user asking this question is:
      Name: ${userProfile?.name || 'Anonymous'}
      Location: ${userProfile?.location || 'Unknown'}
      Occupation: ${userProfile?.occupation || 'Unknown'}

      Please provide personalized advice while answering this question about medicinal plants, their uses, or Ayurvedic medicine: ${input}

      Focus on providing accurate, helpful information about:
      - Plant identification
      - Medicinal properties
      - Traditional uses
      - Growing conditions
      - Safety considerations
      - Scientific research
      
      Consider the user's location and occupation when providing advice. If you're unsure about something, say so. If the question involves medical advice, remind the user to consult a qualified healthcare practitioner.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Save chat history to Supabase
      const { error: chatError } = await supabase.from('chat_history').insert({
        user_id: session.user.id,
        message: input,
        response: text,
        timestamp: new Date().toISOString()
      });

      if (chatError) throw chatError;

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: text,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="bg-white rounded-lg p-6 text-center">
        <p className="text-gray-600">Please log in to use the AI Assistant</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-sm">
      <div className="flex items-center p-4 border-b">
        <Bot className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-lg font-semibold">Ayurvedic Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about medicinal plants..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiAssistant;