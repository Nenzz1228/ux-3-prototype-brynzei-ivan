export function Story() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-stone-900 mb-4">Our Story</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover the rich history and heritage of the Mountain Hut under Lajoška
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-12 sm:space-y-16">
          {/* Section 1: Origins */}
          <section className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-emerald-700 mb-4">Our Origins</h2>
            <p className="text-stone-600">
              Nestled in the heart of the mountains, our hut has been a sanctuary for hikers and nature lovers for generations, offering shelter and warmth in the alpine wilderness.
            </p>
          </section>

          {/* Section 2: Tradition */}
          <section className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-emerald-700 mb-4">Mountain Tradition</h2>
            <p className="text-stone-600">
              Built with respect for mountain traditions, we continue to honor the heritage of alpine hospitality while providing modern comfort to our guests.
            </p>
          </section>

          {/* Section 3: Nature */}
          <section className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-emerald-700 mb-4">Connection to Nature</h2>
            <p className="text-stone-600">
              Surrounded by breathtaking peaks and pristine trails, our location offers an authentic mountain experience where visitors can reconnect with the natural world.
            </p>
          </section>

          {/* Current State Section - Editable */}
          <section className="bg-emerald-50 rounded-lg p-6 sm:p-8 border-2 border-emerald-200">
            <h2 className="text-emerald-800 mb-4">Current State</h2>
            <div className="text-stone-600 space-y-4">
              <p>
                [Add your own text here about the current state of the mountain hut]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
