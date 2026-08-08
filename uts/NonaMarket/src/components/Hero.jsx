import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-8 lg:mt-12">
      <div className="relative bg-slate-deep rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-deep/30 border border-blue-steel/30">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep via-slate-deep/90 to-transparent"></div>
        </div>
        
        <div className="relative px-4 py-8 sm:px-12 sm:py-20 lg:py-32 lg:px-16 flex flex-col items-start max-w-3xl">
          <span className="text-sand-warm font-bold tracking-wider text-[10px] sm:text-sm uppercase mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
            <span className="w-4 sm:w-8 h-0.5 bg-sand-warm rounded-full"></span>
            Discover Better Products
          </span>
          <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold text-sand-warm tracking-tight mb-3 sm:mb-6 leading-tight">
            Find products that fit your lifestyle.
          </h1>
          <p className="text-xs sm:text-xl text-white/80 mb-6 sm:mb-10 max-w-2xl leading-relaxed">
            Explore our curated collection of premium electronics, fashion, and everyday essentials with smart insights.
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-sand-warm hover:bg-white text-slate-deep px-4 py-2 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-sand-warm/20 hover:-translate-y-1"
          >
            Explore Products
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
