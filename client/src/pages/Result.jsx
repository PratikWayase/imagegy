import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // Initial loading state false
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setImageLoaded(false); // Reset image loaded state

    if (input) {
      const generatedImage = await generateImage(input);
      if (generatedImage) {
        setImage(generatedImage); // Set the new image
        setImageLoaded(true); // Mark image as loaded
      }
    }
    setLoading(false); // End loading
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          {/* Show the image */}
          <img src={image} alt="" className="max-w-sm rounded" />
          {/* Show a loading bar */}
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`}
          />
        </div>

        {/* Show 'Loading...' when generating */}
        {loading && <p className="mt-4 text-blue-500">Loading....</p>}
      </div>

      {/* Input and button */}
      {!loading && (
        <div
          className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />

          <button
            type="submit"
            className="bg-zinc-800 px-10 sm:px-16 py-3 rounded-full"
          >
            <span className="text-white">Generate</span>
          </button>
        </div>
      )}

      {/* Options after image is loaded */}
      {!loading && isImageLoaded && (
        <div
          className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full"
        >
          <p
            onClick={() => {
              setImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-800 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
