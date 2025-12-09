'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
    const [brightness, setBrightness] = useState(100)
    const [imageScale, setImageScale] = useState(0)
    const [isImageLoading, setIsImageLoading] = useState(false)
    const images = [
        { src: '/images/sbercard.png', name: 'Листик' },
        { src: '/images/croissant.png', name: 'Круассан' },
        { src: '/images/bee.png', name: 'Пчела' },
        {src: '/images/el-seed.png', name: 'El Seed - 3D Скан' },
        { src: '/images/butterfly-ocean.png', name: 'Butterfly - Ocean' },
        { src: '/images/butterfly-glitch.png', name: 'Butterfly - Glitch' },
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleImageChange = (newIndex: number) => {
        setIsImageLoading(true)
        setCurrentImageIndex(newIndex)
    }

    return (
        <div className="h-[100dvh] max-w-screen overflow-hidden flex flex-col text-white">
            <div style={{ filter: `brightness(${brightness}%)` }} className="flex-1 flex flex-col min-h-0">
                
                <div className="p-4 flex-1 flex justify-center items-center min-h-0">
                    <Image 
                        src={images[currentImageIndex].src} 
                        alt="Gallery" 
                        width={512} 
                        height={512}
                        className="max-w-full max-h-full object-contain transition-[filter] duration-300"
                        style={{ 
                            transform: `scale(${1 + imageScale / 100})`,
                            filter: isImageLoading ? 'blur(8px)' : 'blur(0px)'
                        }}
                        onLoad={() => setIsImageLoading(false)}
                    />
                </div>
            </div>

            <div className="p-4 flex flex-wrap justify-center gap-2 bg-opacity-80 z-50">
                <div className="flex items-center justify-center gap-4 rounded-full bg-gray-900">
                    <button
                        onClick={() => handleImageChange(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
                        className="p-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <p className="flex items-center gap-2">
                        <span className="text-sm font-bold">{images[currentImageIndex].name}</span>
                        <span className="text-sm">{currentImageIndex + 1} / {images.length}</span>
                    </p>
                    <button
                        onClick={() => handleImageChange(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
                        className="p-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="max-w-md p-4 rounded-full bg-gray-900">
                    <div className="flex items-center gap-4">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                        </svg>
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={brightness}
                            onChange={(e) => setBrightness(Number(e.target.value))}
                            className="h-2 flex-1 rounded-lg appearance-none cursor-pointer bg-gray-700"
                        />
                        <span className="min-w-[2.3rem] text-sm text-right">{brightness}%</span>
                    </div>
                </div>
                <div className="max-w-md p-4 rounded-full bg-gray-900">
                    <div className="flex items-center gap-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <input 
                            type="range" 
                            min="-90" 
                            max="90" 
                            value={imageScale}
                            onChange={(e) => setImageScale(Number(e.target.value))}
                            className="h-2 flex-1 rounded-lg appearance-none cursor-pointer bg-gray-700"
                        />
                        <span className="min-w-[2rem] text-sm text-right">{imageScale > 0 ? '+' : ''}{imageScale}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}