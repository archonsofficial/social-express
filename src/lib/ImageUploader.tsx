// ImageUploader.tsx
import React, { useState } from 'react';
import axios from 'axios';

// Define the props interface for ImageUploader
interface ImageUploaderProps {
    onUpload: (url: string) => void; // Callback for when an image is uploaded
}

const CLOUD_NAME = 'your_cloud_name'; // Replace with your Cloudinary cloud name
const UPLOAD_PRESET = 'unsigned_preset'; // Replace with your upload preset

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        setUploading(true);

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                formData
            );
            const uploadedUrl = res.data.secure_url;
            setImageUrl(uploadedUrl);
            onUpload(uploadedUrl); // Trigger the onUpload callback
        } catch (err) {
            console.error('Upload failed', err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
            />
            {uploading && <p style={{ color: '#007BFF', fontWeight: 'bold' }}>Uploading...</p>}
            {imageUrl && (
            <div style={{ marginTop: '20px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Image URL:</p>
                <a 
                href={imageUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#007BFF', textDecoration: 'none', wordBreak: 'break-word' }}
                >
                {imageUrl}
                </a>
                <br />
                <img 
                src={imageUrl} 
                alt="Uploaded" 
                style={{ maxWidth: '100%', marginTop: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
                />
            </div>
            )}
        </div>
    );
};

export default ImageUploader;
