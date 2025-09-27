export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Our Unique Space
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          We are more than just a training center or a cafe; we are a community hub designed for learning, collaboration, and relaxation. Our mission is to foster personal and professional development while providing a welcoming environment to unwind and connect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              The Training Center
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our state-of-the-art training facilities offer a wide range of courses, workshops, and seminars. From professional skill development to creative arts, we provide expert-led programs designed to help you achieve your goals and unlock your full potential.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
              The Cozy Cafe
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Adjacent to our training rooms, our cafe is the perfect spot to recharge. Enjoy ethically sourced coffee, delicious pastries, and light meals in a comfortable and inspiring atmosphere. It's an ideal place for networking, studying, or simply enjoying a quiet moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}