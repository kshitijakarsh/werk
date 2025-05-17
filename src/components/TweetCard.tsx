import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  CheckCircle,
} from "lucide-react";

interface TweetCardProps {
  tweetContent: string;
}

export default function TweetCard({ tweetContent }: TweetCardProps) {
  const tweet = {
    profileImage: "/image.png",
    name: "twyt",
    username: "@twyt",
    timestamp: "2h",
    content: tweetContent,
    replyCount: 24,
    retweetCount: 105,
    likeCount: 348,
    viewCount: 2804,
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <div className="flex items-start">
          <img
            className="h-12 w-12 rounded-full mr-4 object-cover"
            src={tweet.profileImage}
            alt="Profile"
          />
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-bold text-gray-900 dark:text-white mr-1">
                {tweet.name}
              </span>
              <span className="text-gray-500 ml-2">{tweet.username}</span>
              <span className="text-gray-500 mx-1">·</span>
              <span className="text-gray-500">{tweet.timestamp}</span>
            </div>

            <p className="text-gray-800 dark:text-gray-200 mb-2">
              {tweet.content}
            </p>


            <div className="flex justify-between text-gray-500 mt-3">
              <div className="flex items-center hover:text-blue-500 cursor-pointer">
                <MessageCircle className="h-5 w-5" />
                <span className="ml-2 text-sm">{tweet.replyCount}</span>
              </div>
              <div className="flex items-center hover:text-green-500 cursor-pointer">
                <Repeat2 className="h-5 w-5" />
                <span className="ml-2 text-sm">{tweet.retweetCount}</span>
              </div>
              <div className="flex items-center hover:text-red-500 cursor-pointer">
                <Heart className="h-5 w-5" />
                <span className="ml-2 text-sm">{tweet.likeCount}</span>
              </div>
              <div className="flex items-center hover:text-blue-500 cursor-pointer">
                <BarChart2 className="h-5 w-5" />
                <span className="ml-2 text-sm">{tweet.viewCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
