import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'

interface EngagementData {
  name: string
  likes: number
  comments: number
}

interface SentimentData {
  name: string
  value: number
}

interface DemographicData {
  name: string
  users: number
}

interface PlatformAnalytics {
  engagement: EngagementData[]
  sentiment: SentimentData[]
  demographics: DemographicData[]
  aiTips: string
}

type Platform = 'instagram' | 'twitter' | 'linkedin'

const platformData: Record<Platform, PlatformAnalytics> = {
  instagram: {
    engagement: [
      { name: 'Mon', likes: 120, comments: 50 },
      { name: 'Tue', likes: 200, comments: 80 },
      { name: 'Wed', likes: 150, comments: 60 }
    ],
    sentiment: [
      { name: 'Positive', value: 65 },
      { name: 'Neutral', value: 25 },
      { name: 'Negative', value: 10 }
    ],
    demographics: [
      { name: '18-24', users: 400 },
      { name: '25-34', users: 300 },
      { name: '35+', users: 150 }
    ],
    aiTips: 'Post between 6-8 PM. Use reels with trending audio and 5+ hashtags.'
  },
  twitter: {
    engagement: [
      { name: 'Mon', likes: 100, comments: 40 },
      { name: 'Tue', likes: 180, comments: 70 },
      { name: 'Wed', likes: 130, comments: 45 }
    ],
    sentiment: [
      { name: 'Positive', value: 55 },
      { name: 'Neutral', value: 35 },
      { name: 'Negative', value: 10 }
    ],
    demographics: [
      { name: '18-24', users: 250 },
      { name: '25-34', users: 200 },
      { name: '35+', users: 100 }
    ],
    aiTips: 'Engage in trending topics. Tweet 2-3 times daily. Short and sharp copy wins!'
  },
  linkedin: {
    engagement: [
      { name: 'Mon', likes: 80, comments: 30 },
      { name: 'Tue', likes: 120, comments: 60 },
      { name: 'Wed', likes: 100, comments: 45 }
    ],
    sentiment: [
      { name: 'Positive', value: 75 },
      { name: 'Neutral', value: 20 },
      { name: 'Negative', value: 5 }
    ],
    demographics: [
      { name: '18-24', users: 180 },
      { name: '25-34', users: 350 },
      { name: '35+', users: 270 }
    ],
    aiTips: 'Share stories and achievements. Post around 10 AM for max reach.'
  }
}

const colors = ['#10b981', '#3b82f6', '#f59e0b']

const Analytics = () => {
  const [platform, setPlatform] = useState<Platform>('instagram')
  const data = platformData[platform]

  return (
    <div className="dark bg-gray-900 text-white min-h-screen p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">📊 Social Media Analytics</h1>
        <p className="text-gray-400">Understand your performance across platforms, powered by smart AI insights.</p>
      </header>

      <div className="flex justify-center space-x-4">
        {(Object.keys(platformData) as Platform[]).map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded-lg border ${platform === p ? 'bg-white text-black font-bold' : 'bg-gray-800 border-gray-600'}`}
            onClick={() => setPlatform(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Engagement Chart */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Engagement</h2>
          <LineChart width={300} height={200} data={data.engagement}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="likes" stroke="#10b981" />
            <Line type="monotone" dataKey="comments" stroke="#f59e0b" />
          </LineChart>
        </div>

        {/* Sentiment Chart */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Sentiment</h2>
          <PieChart width={300} height={200}>
            <Pie data={data.sentiment} dataKey="value" nameKey="name" outerRadius={80}>
              {data.sentiment.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Demographics Chart */}
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Demographics</h2>
          <BarChart width={300} height={200} data={data.demographics}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3b82f6" />
          </BarChart>
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="bg-gray-800 p-4 rounded-2xl shadow-md mt-4">
        <h2 className="text-lg font-semibold mb-2">🤖 AI Suggestion</h2>
        <p className="text-green-400">{data.aiTips}</p>
      </div>
    </div>
  )
}

export default Analytics
