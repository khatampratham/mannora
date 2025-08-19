import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Modal from '@/components/ui/Modal'; // keep this or use the inline Modal provided below

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // 5 sample posts (guaranteed visible placeholders)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Mental Health',
      excerpt: 'Discover how AI is revolutionizing mental health care...',
      content: 'Full article content for AI in mental health...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI & Mental Health',
      image: 'images.jpeg',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: '5 Wellness Tips for Better Mental Health',
      excerpt: 'Simple, science-backed strategies to improve your mental wellbeing...',
      content: 'Full article content for wellness tips...',
      author: 'Dr. Michael Rodriguez',
      date: '2024-01-12',
      category: 'Wellness Tips',
      image: '1.jpeg',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Why Early Detection is the Key to Mental Wellness',
      excerpt: 'Mental health issues often go unnoticed until they become...',
      content: 'Full article content for company updates...',
      author: 'Emily Watson',
      date: '2024-01-10',
      category: 'Company Updates',
      image: '5.webp',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'Understanding Voice Pattern Analysis',
      excerpt: 'How subtle changes in speech patterns can reveal early signs...',
      content: 'Full article content for voice pattern analysis...',
      author: 'Dr. James Liu',
      date: '2024-01-08',
      category: 'AI & Mental Health',
      image: '3.jpg',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'How AI is Revolutionizing Mental Health Care',
      excerpt: 'Artificial Intelligence is transforming industries, and mental...',
      content: 'Full article content for workplace mental health...',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      category: 'Wellness Tips',
      image: '4.jpeg',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI & Mental Health', 'Wellness Tips', 'Company Updates'];

  // normalize search / trim whitespace
  const q = searchQuery.trim().toLowerCase();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      q === '' ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q);
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // Ensure this container sits above any background canvas/overlay (z-20)
    <div className="min-h-screen pt-16 relative z-20">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest insights on AI, mental health, and digital wellness
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-xl w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="interactive"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer"
                >
                  {/* Card with explicit background so it's visible on dark pages */}
                  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="h-48 w-full">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-primary/10 text-primary text-xs">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for full article */}
      {selectedPost && (
        <Modal onClose={() => setSelectedPost(null)}>
          <div className="max-w-3xl mx-auto">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-56 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2"><User className="h-4 w-4" />{selectedPost.author}</div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />{new Date(selectedPost.date).toLocaleDateString()}</div>
              <div className="ml-auto text-xs text-muted-foreground">{selectedPost.readTime}</div>
            </div>
            <p className="text-sm mb-6">{selectedPost.content}</p>
            <div className="flex justify-end">
              <Button variant="ghost" onClick={() => setSelectedPost(null)}>Close</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Blog;
