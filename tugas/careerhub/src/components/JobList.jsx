import JobCard from "./JobCard";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend React Developer",
      company: "Tech Utama Indonesia",
      location: "Jakarta (Hybrid)",
      type: "Full-time",
      salary: "Rp 8.000.000 - 12.000.000",
      experience: "Minimal 2 Tahun",
      postedAt: "2 hari yang lalu",
      tags: ["React", "Vite", "CSS Modern", "JavaScript"],
    },
    {
      id: 2,
      title: "Backend Middleware Engineer",
      company: "Pasim Solutions",
      location: "Bandung (Onsite)",
      type: "Full-time",
      salary: "Rp 10.000.000 - 15.000.000",
      experience: "Minimal 3 Tahun",
      postedAt: "5 jam yang lalu",
      tags: ["Node.js", "Express", "REST API", "Database"],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Kreatif Media Digital",
      location: "Remote",
      type: "Contract",
      salary: "Rp 6.000.000 - 9.000.000",
      experience: "1 - 2 Tahun",
      postedAt: "Baru saja",
      tags: ["Figma", "Wireframing", "User Research"],
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Inovasi Cipta Mandiri",
      location: "Yogyakarta (Onsite)",
      type: "Full-time",
      salary: "Rp 7.000.000 - 11.000.000",
      experience: "Minimal 1 Tahun",
      postedAt: "1 hari yang lalu",
      tags: ["Flutter", "Dart", "Firebase", "Android"],
    },
  ];

  return (
    <section className="bagian-loker wadah">
      <div className="judul-bagian">
        <h2>Lowongan Pekerjaan Unggulan</h2>
        <p>Pilih posisi yang sesuai dengan keahlian dan minatmu</p>
      </div>

      <div className="daftar-kartu">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
            salary={job.salary}
            experience={job.experience}
            postedAt={job.postedAt}
            tags={job.tags}
          />
        ))}
      </div>

      <div className="wadah-tombol-tengah">
        <button className="tombol-outline">Lihat Semua Lowongan</button>
      </div>
    </section>
  );
};

export default JobList;
