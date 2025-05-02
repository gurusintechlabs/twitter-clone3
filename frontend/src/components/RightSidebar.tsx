import React, { useState } from 'react';

const RightSidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const trendingTopics = [
    { id: 1, name: 'Programming', tweets: '125K' },
    { id: 2, name: 'JavaScript', tweets: '98K' },
    { id: 3, name: 'React', tweets: '85K' },
    { id: 4, name: 'TypeScript', tweets: '72K' },
    { id: 5, name: 'NodeJS', tweets: '65K' },
  ];
  
  const whoToFollow = [
    { id: 1, name: 'React', username: 'reactjs', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'TypeScript', username: 'typescript', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Node.js', username: 'nodejs', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="hidden lg:block w-80 h-screen sticky top-0 overflow-y-auto p-4">
      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Twitter"
            className="w-full bg-gray-100 rounded-full py-3 px-12 focus:outline-none focus:bg-white focus:ring-1 focus:ring-twitter-blue"
          />
          <div className="absolute left-4 top-3 text-gray-500">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3 text-twitter-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <g>
                  <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Trending */}
      <div className="bg-gray-50 rounded-2xl mb-4">
        <h2 className="text-xl font-bold p-4">Trends for you</h2>
        <ul>
          {trendingTopics.map((topic) => (
            <li key={topic.id} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-500">Trending in Tech</p>
                  <p className="font-bold">#{topic.name}</p>
                  <p className="text-xs text-gray-500">{topic.tweets} Tweets</p>
                </div>
                <button className="text-gray-500 hover:text-twitter-blue p-1 rounded-full hover:bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <circle cx="5" cy="12" r="2"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <a href="#" className="text-twitter-blue hover:underline">Show more</a>
        </div>
      </div>
      
      {/* Who to follow */}
      <div className="bg-gray-50 rounded-2xl">
        <h2 className="text-xl font-bold p-4">Who to follow</h2>
        <ul>
          {whoToFollow.map((user) => (
            <li key={user.id} className="px-4 py-3 hover:bg-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-gray-500">@{user.username}</p>
                  </div>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800">
                  Follow
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <a href="#" className="text-twitter-blue hover:underline">Show more</a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-4 px-4 text-xs text-gray-500">
        <nav className="flex flex-wrap">
          <a href="#" className="mr-2 mb-2 hover:underline">Terms of Service</a>
          <a href="#" className="mr-2 mb-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mr-2 mb-2 hover:underline">Cookie Policy</a>
          <a href="#" className="mr-2 mb-2 hover:underline">Accessibility</a>
          <a href="#" className="mr-2 mb-2 hover:underline">Ads info</a>
          <a href="#" className="mr-2 mb-2 hover:underline">More</a>
        </nav>
        <p className="mt-2">© 2023 Twitter Clone</p>
      </div>
    </div>
  );
};

export default RightSidebar;
