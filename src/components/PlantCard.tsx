import React from 'react';
import { Heart, AlertCircle } from 'lucide-react';
import { Plant } from '../types';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../hooks/useAuth';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { session } = useAuth();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    if (session?.user) {
      checkIfFavorite();
    }
  }, [session, plant.id]);

  const checkIfFavorite = async () => {
    try {
      const { data } = await supabase
        .from('favorite_plants')
        .select('*')
        .eq('user_id', session?.user.id)
        .eq('plant_id', plant.id);
      
      setIsFavorite(data !== null && data.length > 0);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!session?.user) return;

    try {
      if (isFavorite) {
        await supabase
          .from('favorite_plants')
          .delete()
          .eq('user_id', session.user.id)
          .eq('plant_id', plant.id);
      } else {
        await supabase
          .from('favorite_plants')
          .insert({
            user_id: session.user.id,
            plant_id: plant.id,
            plant_name: plant.name,
            added_at: new Date().toISOString()
          });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="h-48 overflow-hidden">
        {imageError ? (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-gray-400" />
          </div>
        ) : (
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
            onError={handleImageError}
          />
        )}
        {session && (
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{plant.name}</h3>
        <p className="text-gray-500 italic mb-3">{plant.scientificName}</p>
        
        <div className="flex flex-wrap gap-2">
          {plant.medicinalProperties.slice(0, 3).map((property, index) => {
            const colors = [
              'bg-green-50 text-green-700',
              'bg-blue-50 text-blue-700',
              'bg-purple-50 text-purple-700',
            ];
            const colorIndex = index % colors.length;
            
            return (
              <span
                key={property}
                className={`px-3 py-1 rounded-full text-xs font-medium ${colors[colorIndex]}`}
              >
                {property}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;