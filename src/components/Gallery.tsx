import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  preview?: boolean;
}

// カテゴリー一覧
const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'family', name: 'Family' },
  { id: 'event', name: 'Event' }
];

// ギャラリー画像一覧（画像パスはベタ書きで）
const galleryImages = [
  {
    id: 1,
    src: '/pictures/Wedding1.jpg',
    alt: 'Wedding couple',
    category: 'wedding'
  },
  {
    id: 2,
    src: '/pictures/portrait.jpg',
    alt: 'Portrait session',
    category: 'portrait'
  },
  {
    id: 3,
    src: '/pictures/music.jpg',
    alt: 'Music event',
    category: 'event'
  },
  {
    id: 4,
    src: '/pictures/guitar.jpg',
    alt: 'Music',
    category: 'creative'
  },
  {
    id: 5,
    src: '/pictures/wedding2.jpg',
    alt: 'Wedding ceremony',
    category: 'wedding'
  },
  {
    id: 6,
    src: '/pictures/bike.jpg',
    alt: 'Portrait session',
    category: 'portrait'
  },
  {
    id: 7,
    src: '/pictures/_DSC5090.jpg',
    alt: 'Family portrait',
    category: 'family'
  },
  {
    id: 8,
    src: '/pictures/reighandivorce4.jpg',
    alt: 'Special event',
    category: 'event'
  },
  {
    id: 9,
    src: '/pictures/_DSC7329.jpg',
    alt: 'Music event',
    category: 'event'
  }
];


const Gallery: React.FC<GalleryProps> = ({ preview = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // カテゴリー選択時
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // 選択中のカテゴリーで画像をフィルタリング
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // プレビューの場合は最大6枚まで表示
  const displayImages = preview ? filteredImages.slice(0, 6) : filteredImages;

  // 画像クリックでライトボックスを開く
  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  // ライトボックス閉じる
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* カテゴリー選択ボタン（プレビューでは非表示） */}
      {!preview && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* ギャラリーグリッド */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {displayImages.map((image) => (
          <motion.div
            key={image.id}
            className="relative overflow-hidden group cursor-pointer h-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => openLightbox(image.id)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <p className="font-serif text-lg">{image.alt}</p>
                <p className="text-sm capitalize">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ライトボックス */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation(); // クリックのバブリングを防ぐ
                closeLightbox();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.src} 
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
