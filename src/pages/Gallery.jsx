const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/002/233/901/small/landscape-of-house-under-construction-site-with-reinforcement-steelwork-free-photo.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2022/7/BI/BN/VI/145608610/jose-titus-at-thevara1.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8flY9NLBkXJMzyjiIsMymZVR0jJy9zI1voIrTPBu1l5Re80fFDqYF3PA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTos-0dIeKodgnrQZAc2mjhl-NbAC3buXxEkJY25EdTfI4LlfedBTymbqJ&s=10",
  "https://thumbs.dreamstime.com/b/indian-labour-holded-brick-wall-creation-home-construction-site-india-dec-indian-labour-holded-brick-168120050.jpg",
  "https://images.deccanchronicle.com/dc-Cover-b360qst67o6h0lrv4ntj9h2ku0-20161212101301.Medi.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcalYWHNNnRDCKHOODp6lAY3P54yoNay-0kTjDIQ_VKaiaObii4aSmpde&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChPmgRYuvgIDVYlDKqnuuGi7RHkBxnN6JxymupyO3LUnWEUwAzvBbBKcg&s=10",
  "https://www.constructionweekonline.in/cloud/2021/12/27/1-construction-work.jpg",
  "https://media.istockphoto.com/id/610451052/photo/construction-site.jpg?s=612x612&w=0&k=20&c=aevXmKPPj987M1s3obIirYajiV7LchedcdTSvSGBaW4=",
  "https://media.istockphoto.com/id/610442626/photo/master-mason.jpg?s=612x612&w=0&k=20&c=8JlF8evy9RJRSup-WM6_G1XJh0Hd3tWAPUoLYERyoqk=",
  "https://media.istockphoto.com/id/2206022558/photo/a-partially-built-brick-house-with-an-unfinished-roof-a-bamboo-ladder-leaning-against-the.jpg?s=612x612&w=0&k=20&c=D05VXUf2ZSIDvJ7XFQw2JKS9WVFbx9h7NsnGU1p_npw=",
];

const Gallery = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header - simple */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter">OUR WORK</h1>
        <p className="text-zinc-500 mt-2 text-sm">500+ sites • Kantha, Unnao</p>
      </div>

      {/* Masonry - only images */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3  space-y-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="work"
              className="w-full rounded- break-inside-avoid hover:opacity-90 transition-opacity cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;