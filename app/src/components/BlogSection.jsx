import { ShapeDecorationsBlog } from './ShapeDecorations'

const posts = [
  {
    image: '/images/blog-image/blog-image10.jpg',
    author: 'Sarah Taylor',
    date: 'June 24, 2025',
    title: 'How AI Agents Are Transforming Business Operations',
    excerpt: 'Practical ways VexaCore helps teams automate repetitive work and focus on what matters most.',
  },
  {
    image: '/images/blog-image/blog-image11.jpg',
    author: 'James Anderson',
    date: 'June 26, 2025',
    title: 'AWS Onboarding: What Growing Businesses Need to Know',
    excerpt: 'A plain-language guide to getting your applications on AWS securely and efficiently.',
  },
  {
    image: '/images/blog-image/blog-image12.jpg',
    author: 'Steven Smith',
    date: 'June 25, 2025',
    title: 'Building Products, Not One-Off Projects',
    excerpt: 'Why VexaCore Technologies ships software as products — with clarity, support, and iteration.',
  },
]

export default function BlogSection() {
  return (
    <div className="blog-area ptb-100" id="blog">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Story</h2>
          <p>
            Insights on AI, cloud, and product delivery from the VexaCore Technologies team.
          </p>
        </div>
        <div className="row justify-content-center">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.title}>
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="#blog">
                    <img alt={post.title} width="510" height="400" src={post.image} />
                  </a>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>By:<span style={{ color: '#ff0000' }}>{post.author}</span></li>
                      <li>{post.date}</li>
                    </ul>
                  </div>
                  <h3><a href="#blog">{post.title}</a></h3>
                  <p>{post.excerpt}</p>
                  <a className="read-more-btn" href="#blog">
                    Read More <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShapeDecorationsBlog />
    </div>
  )
}
