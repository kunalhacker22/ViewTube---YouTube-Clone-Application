import React, { useState } from 'react';
import { Search, Home, Video, Clock, ThumbsUp, Menu, User, Play } from 'lucide-react';

export default function YouTubeClone() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample videos - these are real YouTube video IDs
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Rick Astley - Never Gonna Give You Up (Official Video)',
      channel: 'Rick Astley',
      views: '1.4B views',
      time: '4 years ago',
      duration: '3:33'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Me at the zoo - First YouTube Video Ever',
      channel: 'jawed',
      views: '280M views',
      time: '18 years ago',
      duration: '0:19'
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
      channel: 'Luis Fonsi',
      views: '8.3B views',
      time: '7 years ago',
      duration: '4:42'
    },
    {
      id: '9bZkp7q19f0',
      title: 'PSY - GANGNAM STYLE (강남스타일) M/V',
      channel: 'officialpsy',
      views: '5B views',
      time: '12 years ago',
      duration: '4:13'
    },
    {
      id: 'OPf0YbXqDm0',
      title: 'Mark Ronson - Uptown Funk ft. Bruno Mars',
      channel: 'Mark Ronson',
      views: '4.9B views',
      time: '9 years ago',
      duration: '4:30'
    },
    {
      id: 'RgKAFK5djSk',
      title: 'Wiz Khalifa - See You Again ft. Charlie Puth',
      channel: 'Wiz Khalifa',
      views: '6.2B views',
      time: '9 years ago',
      duration: '3:57'
    },
    {
      id: 'fJ9rUzIMcZQ',
      title: 'Queen – Bohemian Rhapsody (Official Video)',
      channel: 'Queen Official',
      views: '1.9B views',
      time: '14 years ago',
      duration: '5:55'
    },
    {
      id: 'JGwWNGJdvx8',
      title: 'Ed Sheeran - Shape of You (Official Music Video)',
      channel: 'Ed Sheeran',
      views: '6.2B views',
      time: '7 years ago',
      duration: '3:54'
    },
    {
      id: 'hT_nvWreIhg',
      title: 'OneRepublic - Counting Stars',
      channel: 'OneRepublic',
      views: '3.9B views',
      time: '10 years ago',
      duration: '4:17'
    }
  ];

  const filteredVideos = searchQuery
    ? videos.filter(v => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : videos;

  const getChannelColor = (channel) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-indigo-500'];
    const index = channel.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer text-gray-700" />
          <div className="flex items-center gap-1">
            <div className="bg-red-600 rounded p-1">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold">ViewTube</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center bg-gray-100 rounded-full border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent outline-none"
            />
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-full p-2 cursor-pointer">
          <User className="w-6 h-6 text-white" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-3 overflow-y-auto">
          <nav className="space-y-1">
            <div className="flex items-center gap-4 px-3 py-2 rounded-lg bg-gray-100 cursor-pointer">
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Video className="w-5 h-5" />
              <span>Subscriptions</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Clock className="w-5 h-5" />
              <span>History</span>
            </div>
            <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <ThumbsUp className="w-5 h-5" />
              <span>Liked videos</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {selectedVideo ? (
            <div className="max-w-6xl mx-auto">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium"
              >
                ← Back to videos
              </button>
              
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="600"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h1 className="text-2xl font-bold mb-3">{selectedVideo.title}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${getChannelColor(selectedVideo.channel)} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {selectedVideo.channel[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{selectedVideo.channel}</p>
                    <p className="text-sm text-gray-600">{selectedVideo.views} • {selectedVideo.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6">Recommended Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="cursor-pointer group"
                  >
                    <div className="relative mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg">
                      <div className="aspect-video flex items-center justify-center relative">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-red-500 to-pink-600">
                          <Play className="w-20 h-20 text-white fill-white opacity-90" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 ${getChannelColor(video.channel)} rounded-full flex items-center justify-center text-white font-bold`}>
                        {video.channel[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-blue-600">
                          {video.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-medium">{video.channel}</p>
                        <p className="text-xs text-gray-500">
                          {video.views} • {video.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No videos found matching "{searchQuery}"</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
