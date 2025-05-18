import React, { useState } from 'react';
import { Upload, RefreshCw, Search } from 'lucide-react';
import { identifyPlant } from '../lib/gemini';
import { useIdentificationHistory } from '../hooks/useIdentificationHistory';
import type { PredictionResult } from '../lib/gemini';

interface ImageUploaderProps {
  onImageUpload: (result: PredictionResult) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addToHistory } = useIdentificationHistory();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreview(null);
    setError(null);
  };

  const handleIdentify = async () => {
    if (!selectedImage) return;

    setIsIdentifying(true);
    setError(null);
    
    try {
      const reader = new FileReader();
      
      const result = await new Promise<PredictionResult>((resolve, reject) => {
        reader.onloadend = async () => {
          try {
            const base64String = reader.result as string;
            const identificationResult = await identifyPlant(base64String);
            resolve(identificationResult);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = () => reject(new Error('Failed to read image file'));
        reader.readAsDataURL(selectedImage);
      });

      // Add to identification history
      await addToHistory(
        preview || '',
        result.plant.name,
        result.plant.confidence,
        {
          scientificName: result.plant.scientificName,
          medicinalProperties: result.plant.medicinalProperties,
          traditionalUses: result.plant.traditionalUses
        }
      );

      onImageUpload(result);
    } catch (error) {
      console.error('Error identifying plant:', error);
      setError(error instanceof Error ? error.message : 'Failed to identify plant. Please try again.');
    } finally {
      setIsIdentifying(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Plant Image</h2>
      <p className="text-gray-600 mb-6">Upload a clear image of the plant or leaf you want to identify</p>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 mb-6 flex flex-col items-center justify-center min-h-[300px] transition-colors ${
          isDragging 
            ? 'border-green-500 bg-green-50' 
            : preview 
              ? 'border-gray-200' 
              : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <>
            <img 
              src={preview} 
              alt="Plant preview" 
              className="max-h-[280px] object-contain mb-4"
            />
            <button 
              onClick={handleReset}
              className="text-gray-600 hover:text-gray-900 absolute top-2 right-2 bg-white rounded-full p-1"
            >
              ×
            </button>
          </>
        ) : (
          <>
            <Upload className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-4">Drag and drop an image, or click to browse</p>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              className="hidden"
              onChange={handleImageChange}
            />
            <label 
              htmlFor="image-upload"
              className="flex items-center justify-center space-x-2 bg-white text-gray-800 px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition duration-200 cursor-pointer"
            >
              <Upload className="h-5 w-5" />
              <span>Choose Image</span>
            </label>
          </>
        )}
      </div>
      
      {error && (
        <div className="text-red-600 mb-4 text-sm">
          {error}
        </div>
      )}
      
      <div className="flex justify-between">
        <button
          onClick={handleReset}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Reset</span>
        </button>
        
        <button
          onClick={handleIdentify}
          disabled={!selectedImage || isIdentifying}
          className={`flex items-center space-x-2 px-6 py-2 rounded-md text-white ${
            selectedImage && !isIdentifying
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          <Search className="h-5 w-5" />
          <span>{isIdentifying ? 'Identifying...' : 'Identify Plant'}</span>
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;