import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'signage', label: 'Signage & Visuals' },
    { id: 'led', label: 'LED Displays' },
    { id: 'security', label: 'Smart Security & Automation' },
    { id: 'printing', label: 'Printing & Branding' },
    { id: 'it', label: 'IT & Systems' }
  ];

  const signageImageFiles = [
    '-1022479858.jpg',
    '-10443049.jpg',
    '-1075712704.jpg',
    '-1093208852.jpg',
    '-1117489240.jpg',
    '-1122504419.jpg',
    '-1132061480.jpg',
    '-1151631198.jpg',
    '-1177872238.jpg',
    '-1182259093.jpg',
    '-122019544.jpg',
    '-1272832971.jpg',
    '-1317985273.jpg',
    '-1347673397.jpg',
    '-1372526332.jpg',
    '-1376694230.jpg',
    '-1389993409.jpg',
    '-1416800185.jpg',
    '-1437938261.jpg',
    '-1456117535.jpg',
    '-1457990942.jpg',
    '-1473957048.jpg',
    '-1563138643.jpg',
    '-1586854865.jpg',
    '-167215492.jpg',
    '-1681798062.jpg',
    '-1694537368.jpg',
    '-1703514456.jpg',
    '-17271201.jpg',
    '-1730789511.jpg',
    '-1746634418.jpg',
    '-1834833244.jpg',
    '-219414476.jpg',
    '-30987950.jpg',
    '-343382342.jpg',
    '-345757588.jpg',
    '-392927079.jpg',
    '-515464305.jpg',
    '-554935273.jpg',
    '-600839999.jpg',
    '-622676491.jpg',
    '-622847398.jpg',
    '-632464912.jpg',
    '-669892735.jpg',
    '-721266586.jpg',
    '-746058294.jpg',
    '-789163013.jpg',
    '-83207982.jpg',
    '-925258749.jpg',
    '-930715640.jpg',
    '-957639416.jpg',
    '1035935666.jpg',
    '1074850658.jpg',
    '1151878363.jpg',
    '1170222617.jpg',
    '1236246764.jpg',
    '131908857.jpg',
    '1388375826.jpg',
    '1392987898.jpg',
    '1557180741.jpg',
    '1557374007.jpg',
    '1566983434.jpg',
    '1587396621.jpg',
    '1681864878.jpg',
    '1697940097.jpg',
    '1704668840.jpg',
    '1739165913.jpg',
    '1752094643.jpg',
    '1818440889.jpg',
    '1831241298.jpg',
    '1833259494.jpg',
    '1839518129.jpg',
    '1884690894.jpg',
    '1b08506b-ca10-4c2e-ab9f-b416a5dbacbb.JPG',
    '246036316.jpg',
    '266781957.jpg',
    '273978330.jpg',
    '299760194.jpg',
    '30040ed8-f945-4391-a056-1814a013f195.JPG',
    '31faa82d-ce25-4924-8057-10993cd52dc1.JPG',
    '32404987.jpg',
    '372708113.jpg',
    '382146914.jpg',
    '391437682.jpg',
    '415738712.jpg',
    '454302759.jpg',
    '456073186.jpg',
    '456237007.jpg',
    '468644178.jpg',
    '479515109.jpg',
    '48819129.jpg',
    '525781619.jpg',
    '580184460.jpg',
    '586763216.jpg',
    '5b8b943a-4066-4510-8d92-bd251b81c3c4.JPG',
    '640612780.jpg',
    '692440379.jpg',
    '73039752.jpg',
    '792674600.jpg',
    '807010850.jpg',
    '811469669.jpg',
    '819945384.jpg',
    '842614142.jpg',
    '868222057.jpg',
    '87208289.jpg',
    '954156001.jpg',
    '9faaa4a7-193d-4e15-95ae-8dc768f2efbd.JPG'
  ];

  const signageImages = signageImageFiles.map((file, index) => ({
    src: `/images/SIGNAGE/${file}`,
    alt: `Signage project ${index + 1}`,
    type: 'Signage Project'
  }));

  const gallerySections = [
    {
      id: 'signage',
      title: 'Signage & Cladding Projects',
      description: 'Outdoor signs, ACP cladding, wayfinding, and channel letters',
      images: signageImages
    },
    {
      id: 'led',
      title: 'LED Display Installations',
      description: 'Indoor and outdoor LED screens, digital advertising displays',
      images: [
        { src: '/images/gallery/led-1.jpg', alt: 'Outdoor LED billboard', type: 'Outdoor LED' },
        { src: '/images/gallery/led-2.jpg', alt: 'Indoor LED wall', type: 'Indoor LED Wall' },
        { src: '/images/gallery/led-3.jpg', alt: 'Digital advertising display', type: 'Digital Signage' },
        { src: '/images/gallery/led-4.jpg', alt: 'LED video wall installation', type: 'Video Wall' },
        { src: '/images/gallery/led-5.jpg', alt: 'Shopping mall LED display', type: 'Commercial LED' },
        { src: '/images/gallery/led-6.jpg', alt: 'Stadium LED scoreboard', type: 'Sports Display' }
      ]
    },
    {
      id: 'security',
      title: 'Smart Security & Automation',
      description: 'CCTV, access control, gates, and surveillance setups',
      images: [
        { src: '/images/gallery/security-1.jpg', alt: 'CCTV camera installation', type: 'CCTV System' },
        { src: '/images/gallery/security-2.jpg', alt: 'Access control system', type: 'Access Control' },
        { src: '/images/gallery/security-3.jpg', alt: 'Automated gate system', type: 'Automated Gates' },
        { src: '/images/gallery/security-4.jpg', alt: 'Security control room', type: 'Control Room' },
        { src: '/images/gallery/security-5.jpg', alt: 'Perimeter security setup', type: 'Perimeter Security' },
        { src: '/images/gallery/security-6.jpg', alt: 'Smart home automation', type: 'Home Automation' }
      ]
    },
    {
      id: 'printing',
      title: 'Printing & Branding Projects',
      description: 'Event branding, large format prints, corporate materials',
      images: [
        { src: '/images/gallery/printing-1.jpg', alt: 'Large format banner printing', type: 'Large Format' },
        { src: '/images/gallery/printing-2.jpg', alt: 'Corporate branding materials', type: 'Corporate Branding' },
        { src: '/images/gallery/printing-3.jpg', alt: 'Event signage and branding', type: 'Event Branding' },
        { src: '/images/gallery/printing-4.jpg', alt: 'Vehicle branding and wraps', type: 'Vehicle Branding' },
        { src: '/images/gallery/printing-5.jpg', alt: 'Indoor signage printing', type: 'Indoor Signage' },
        { src: '/images/gallery/printing-6.jpg', alt: 'Promotional materials', type: 'Promotional Print' }
      ]
    },
    {
      id: 'it',
      title: 'IT & System Integration',
      description: 'Network setups, server rooms, infrastructure deployments',
      images: [
        { src: '/images/gallery/it-1.jpg', alt: 'Server room setup', type: 'Server Infrastructure' },
        { src: '/images/gallery/it-2.jpg', alt: 'Network cabling installation', type: 'Network Setup' },
        { src: '/images/gallery/it-3.jpg', alt: 'Data center deployment', type: 'Data Center' },
        { src: '/images/gallery/it-4.jpg', alt: 'IT infrastructure integration', type: 'System Integration' },
        { src: '/images/gallery/it-5.jpg', alt: 'Cloud infrastructure setup', type: 'Cloud Infrastructure' },
        { src: '/images/gallery/it-6.jpg', alt: 'IT security implementation', type: 'IT Security' }
      ]
    }
  ];

  const filteredSections = activeFilter === 'all'
    ? gallerySections
    : gallerySections.filter(section => section.id === activeFilter);

  const visibleImages = useMemo(
    () => filteredSections.flatMap((section) => section.images),
    [filteredSections]
  );

  const handleImageError = (imageSrc) => {
    setImageErrors(prev => new Set([...prev, imageSrc]));
  };

  const ImagePlaceholder = ({ type, alt }) => (
    <div className="w-full h-full bg-[#001829]/50 flex items-center justify-center rounded-lg">
      <div className="text-center p-6">
        <svg className="w-12 h-12 mx-auto text-[#007EA7]/50 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-[#BFC7CE] text-sm font-medium">{type}</p>
        <p className="text-[#BFC7CE]/60 text-xs mt-1">Image coming soon</p>
      </div>
    </div>
  );

  const openLightbox = (image) => {
    const index = visibleImages.findIndex((img) => img.src === image.src);
    setSelectedIndex(index >= 0 ? index : 0);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  const showPrevious = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!visibleImages.length || selectedIndex === null) return;
    const prevIndex = (selectedIndex - 1 + visibleImages.length) % visibleImages.length;
    setSelectedIndex(prevIndex);
  };

  const showNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!visibleImages.length || selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % visibleImages.length;
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="min-h-screen bg-[#003459]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#003459] via-[#001829] to-[#003459]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220%200%2060%2060%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23007EA7%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-[#007EA7] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] mb-8 leading-tight">
              Project Gallery
            </h1>
            <p className="text-[#BFC7CE] text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl">
              A visual showcase of projects delivered across industries and technologies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Navigation */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 overflow-x-auto pb-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[#007EA7] text-white shadow-lg shadow-[#007EA7]/30'
                      : 'bg-[#001829]/50 text-[#BFC7CE] hover:bg-[#001829]/70 hover:text-[#F5F5F5] border border-[#007EA7]/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-20 sm:space-y-24 lg:space-y-32"
        >
          {filteredSections.map((section) => (
            <section key={section.id} className="px-6 sm:px-8 lg:px-16 xl:px-24">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-[#BFC7CE] text-lg sm:text-xl max-w-3xl mx-auto">
                    {section.description}
                  </p>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {section.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        {imageErrors.has(image.src) ? (
                          <ImagePlaceholder type={image.type} alt={image.alt} />
                        ) : (
                          <img
                            src={image.src}
                            alt={image.alt}
                            onError={() => handleImageError(image.src)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-white font-medium text-sm sm:text-base">
                            {image.type}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Strip */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-[#001829] to-[#003459]"
      >
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-16 xl:px-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-6">
            Like what you see? Let's bring your project to life.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#007EA7] text-white font-semibold text-lg rounded-xl hover:bg-[#006891] transition-all duration-300 shadow-xl shadow-[#007EA7]/30 hover:shadow-2xl hover:shadow-[#007EA7]/50"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && visibleImages.length > 0 && (
          (() => {
            const currentImage = visibleImages[selectedIndex];
            return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {imageErrors.has(currentImage.src) ? (
                <div className="bg-[#001829]/80 p-8 rounded-lg">
                  <ImagePlaceholder type={currentImage.type} alt={currentImage.alt} />
                </div>
              ) : (
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              )}
              <button
                onClick={showPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <p className="font-medium">{currentImage.type}</p>
                <p className="text-sm opacity-90">{currentImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
            );
          })()
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;