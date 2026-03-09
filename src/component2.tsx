// Browser mockup
<div className="relative mx-auto max-w-2xl">
  {/* Browser chrome */}
  <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
    {/* Browser toolbar */}
    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 mx-4">
        chrome.google.com/webstore
      </div>
      {/* Extension icon */}
      <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
        <Camera className="w-3 h-3 text-white" />
      </div>
    </div>
    {/* Browser content */}
    <div className="bg-white p-6 relative">
      {/* Extension popup */}
      <div className="absolute top-4 right-4 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
        <div className="text-sm font-semibold text-gray-800 mb-3">QuickSnap</div>
        <div className="space-y-2">
          <button className="w-full text-left text-xs bg-indigo-50 text-indigo-600 rounded-lg px-3 py-2 flex items-center gap-2">
            <Camera className="w-3 h-3" /> Capture Screen
          </button>
          <button className="w-full text-left text-xs bg-gray-50 text-gray-600 rounded-lg px-3 py-2 flex items-center gap-2">
            <Crop className="w-3 h-3" /> Capture Area
          </button>
          <button className="w-full text-left text-xs bg-gray-50 text-gray-600 rounded-lg px-3 py-2 flex items-center gap-2">
            <Share2 className="w-3 h-3" /> Share Last
          </button>
        </div>
      </div>
      {/* Page content mockup */}
      <div className="space-y-3 pr-52">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
        <div className="h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg mt-4" />
        <div className="h-4 bg-gray-100 rounded w-2/3" />
        <div className="h-4 bg-gray-100 rounded w-full" />
      </div>
    </div>
  </div>
</div>