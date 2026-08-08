import { Package, CheckCircle, XCircle, Heart, Grid } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-slate-deep/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg shadow-white/10 border border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 hover:border-sand-warm/60 transition-all duration-300">
    <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-blue-steel/40 text-sand-warm">
      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>
    <div>
      <p className="text-[10px] sm:text-sm font-medium text-white/60 mb-0.5 sm:mb-1">{title}</p>
      <h3 className="text-lg sm:text-2xl font-bold text-sand-warm">{value}</h3>
    </div>
  </div>
);

const DashboardStats = ({ products }) => {
  const totalProducts = products.length;
  const availableStock = products.filter(p => p.stock > 0).length;
  const outOfStock = products.filter(p => p.stock === 0).length;
  const wishlist = products.filter(p => p.favorite).length;
  const categoriesCount = new Set(products.map(p => p.category)).size;

  const stats = [
    { title: 'Total Products', value: totalProducts, icon: Package },
    { title: 'Available', value: availableStock, icon: CheckCircle },
    { title: 'Out of Stock', value: outOfStock, icon: XCircle },
    { title: 'Wishlist', value: wishlist, icon: Heart },
    { title: 'Categories', value: categoriesCount, icon: Grid },
  ];

  return (
    <div className="relative rounded-2xl shadow-2xl shadow-slate-deep/30 border border-white/20 overflow-hidden bg-slate-deep">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-slate-deep/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-4 sm:p-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-sand-warm">Product Overview</h2>
        </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={index === 4 ? "col-span-2 lg:col-span-1" : ""}>
            <StatCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default DashboardStats;
