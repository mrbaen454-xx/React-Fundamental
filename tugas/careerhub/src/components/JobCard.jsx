const JobCard = ({ title, company, location, type, salary, experience, postedAt, tags }) => {
  return (
    <div className="kartu">
      <div className="kepala-kartu">
        <div className="logo-pt">{company.charAt(0)}</div>
        <div>
          <h3 className="nama-loker">{title}</h3>
          <p className="nama-pt">{company}</p>
        </div>
        <div className="waktu-post">{postedAt}</div>
      </div>

      <div className="detail-loker">
        <span className="item-detail">{location}</span>
        <span className="item-detail">{type}</span>
        <span className="item-detail">{salary}</span>
        <span className="item-detail">{experience}</span>
      </div>

      <div className="grup-tag">
        {tags.map((tag, index) => (
          <span key={index} className="tag-loker">
            {tag}
          </span>
        ))}
      </div>

      <div className="grup-tombol">
        <button className="tombol-simpan">Simpan</button>
        <button className="tombol-lamar">Lamar Sekarang</button>
      </div>
    </div>
  );
};

export default JobCard;
