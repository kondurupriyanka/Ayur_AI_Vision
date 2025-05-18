import React from 'react';

const UserAvatar: React.FC = () => {
  return (
    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200">
      <img
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="User avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default UserAvatar;