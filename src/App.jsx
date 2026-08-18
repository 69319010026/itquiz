import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      setIsLogin(true);
      setError("");
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUsername("");
    setPassword("");
  };

  /* =========================
     LOGIN
  ========================= */

  if (!isLogin) {
    return (
      <div className="login-page">

        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>

        <div className="login-card">

          <div className="login-logo">
            <span>◉</span>
          </div>

          <div className="login-title">
            <p>CHARACTER DATABASE</p>
            <h1>NOBITA</h1>
          </div>

          <p className="login-description">
            ระบบข้อมูลประวัติตัวละคร
          </p>

          <form onSubmit={login}>

            <div className="form-group">
              <label>USERNAME</label>

              <div className="input-wrapper">
                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label>PASSWORD</label>

              <div className="input-wrapper">
                <span>🔒</span>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
            </div>

            {error && (
              <div className="error-message">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className="login-btn"
            >
              <span>LOGIN</span>
              <span>→</span>
            </button>

          </form>

          <div className="login-bottom">
            <span>●</span> Secure Character Database
          </div>

        </div>
      </div>
    );
  }

  /* =========================
     MAIN WEBSITE
  ========================= */

  return (
    <div className="website">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="brand">

          <div className="brand-icon">
            N
          </div>

          <div>
            <strong>NOBITA</strong>
            <small>CHARACTER DATABASE</small>
          </div>

        </div>

        <div className="nav-right">

          <span className="online">
            <i></i> ONLINE
          </span>

          <button
            onClick={logout}
            className="logout"
          >
            Logout
          </button>

        </div>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-background"></div>

        <div className="hero-content">

          <div className="hero-text">

            <div className="small-title">
              CHARACTER #001
            </div>

            <h1>
              NOBI
              <br />
              <span>NOBITA</span>
            </h1>

            <p>
              เด็กชายธรรมดาที่มีหัวใจไม่ธรรมดา
              <br />
              พร้อมเรื่องราวการผจญภัยไปกับโดราเอมอน
            </p>

            <div className="hero-buttons">

              <a href="#profile">
                EXPLORE PROFILE ↓
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="image-glow"></div>

            <div className="image-frame">

              <img
                src="/nobita.jpg"
                alt="Nobita"
              />

            </div>

            <div className="image-label">
              <span>01</span>
              NOBITA
            </div>

          </div>

        </div>

      </section>


      {/* PROFILE */}

      <main className="content">

        <section
          id="profile"
          className="section"
        >

          <div className="section-heading">

            <span>01 / PROFILE</span>

            <h2>
              Character
              <strong> Profile</strong>
            </h2>

          </div>


          <div className="profile-grid">

            <div className="profile-card large">

              <span className="card-number">
                01
              </span>

              <small>FULL NAME</small>

              <h3>
                โนบิ โนบิตะ
              </h3>

              <p>
                Nobi Nobita
              </p>

            </div>


            <div className="profile-card">

              <span className="card-number">
                02
              </span>

              <small>BIRTHDAY</small>

              <h3>
                7 สิงหาคม
              </h3>

              <p>
                วันเกิด
              </p>

            </div>


            <div className="profile-card">

              <span className="card-number">
                03
              </span>

              <small>AGE</small>

              <h3>
                10 ปี
              </h3>

              <p>
                นักเรียนระดับประถมศึกษา
              </p>

            </div>


            <div className="profile-card">

              <span className="card-number">
                04
              </span>

              <small>OCCUPATION</small>

              <h3>
                นักเรียน
              </h3>

              <p>
                Elementary Student
              </p>

            </div>


            <div className="profile-card">

              <span className="card-number">
                05
              </span>

              <small>LOCATION</small>

              <h3>
                โตเกียว
              </h3>

              <p>
                ประเทศญี่ปุ่น
              </p>

            </div>

          </div>

        </section>


        {/* STORY */}

        <section className="section story-section">

          <div className="section-heading">

            <span>02 / STORY</span>

            <h2>
              Character
              <strong> Story</strong>
            </h2>

          </div>

          <div className="story-box">

            <div className="story-icon">
              ✦
            </div>

            <div>

              <h3>
                เรื่องราวของโนบิตะ
              </h3>

              <p>
                โนบิ โนบิตะ เป็นเด็กนักเรียนที่อาศัยอยู่
                ในกรุงโตเกียว ประเทศญี่ปุ่น
                เขาเป็นเด็กที่ไม่ค่อยเก่งด้านการเรียน
                กีฬา และมักจะประสบปัญหาอยู่บ่อยครั้ง
              </p>

              <p>
                วันหนึ่งโดราเอมอน หุ่นยนต์แมวจากโลกอนาคต
                ได้เดินทางมายังอดีตเพื่อช่วยเหลือโนบิตะ
                และนั่นจึงกลายเป็นจุดเริ่มต้นของการผจญภัย
                และเรื่องราวมากมาย
              </p>

              <p>
                แม้โนบิตะจะมีจุดอ่อนหลายอย่าง
                แต่เขาเป็นคนมีน้ำใจ รักเพื่อน
                และพร้อมเสียสละเพื่อคนที่เขารัก
              </p>

            </div>

          </div>

        </section>


        {/* PERSONALITY */}

        <section className="section">

          <div className="section-heading">

            <span>03 / PERSONALITY</span>

            <h2>
              Character
              <strong> Traits</strong>
            </h2>

          </div>

          <div className="traits">

            <div className="trait">
              <div>❤️</div>
              <h3>ใจดี</h3>
              <p>
                มีน้ำใจและเห็นอกเห็นใจผู้อื่น
              </p>
            </div>

            <div className="trait">
              <div>😢</div>
              <h3>ขี้แย</h3>
              <p>
                มักร้องไห้เมื่อเจอกับปัญหา
              </p>
            </div>

            <div className="trait">
              <div>🤝</div>
              <h3>รักเพื่อน</h3>
              <p>
                ให้ความสำคัญกับเพื่อนเสมอ
              </p>
            </div>

            <div className="trait">
              <div>🔥</div>
              <h3>กล้าหาญ</h3>
              <p>
                พร้อมปกป้องคนสำคัญในเวลาที่จำเป็น
              </p>
            </div>

          </div>

        </section>


        {/* FRIENDS */}

        <section className="section">

          <div className="section-heading">

            <span>04 / FRIENDS</span>

            <h2>
              Nobita's
              <strong> Friends</strong>
            </h2>

          </div>

          <div className="friends">

            <div className="friend-card">
              <span>01</span>
              <div className="friend-icon">🤖</div>
              <h3>โดราเอมอน</h3>
              <p>
                เพื่อนและผู้ช่วยจากโลกอนาคต
              </p>
            </div>

            <div className="friend-card">
              <span>02</span>
              <div className="friend-icon">🌸</div>
              <h3>ชิซูกะ</h3>
              <p>
                เพื่อนสนิทที่โนบิตะชอบ
              </p>
            </div>

            <div className="friend-card">
              <span>03</span>
              <div className="friend-icon">💪</div>
              <h3>ไจแอนท์</h3>
              <p>
                เพื่อนร่างใหญ่และแข็งแรง
              </p>
            </div>

            <div className="friend-card">
              <span>04</span>
              <div className="friend-icon">😎</div>
              <h3>ซึเนโอะ</h3>
              <p>
                เพื่อนที่ชอบอวดของ
              </p>
            </div>

          </div>

        </section>


        {/* GADGET */}

        <section className="section gadget-section">

          <div className="section-heading">

            <span>05 / GADGETS</span>

            <h2>
              Doraemon's
              <strong> Gadgets</strong>
            </h2>

          </div>

          <div className="gadgets">

            <div className="gadget">
              <span>01</span>
              <div>🚪</div>
              <h3>
                ประตูไปไหนก็ได้
              </h3>
              <p>
                สามารถเดินทางไปยังสถานที่ต่าง ๆ
                ได้อย่างรวดเร็ว
              </p>
            </div>

            <div className="gadget">
              <span>02</span>
              <div>🎋</div>
              <h3>
                คอปเตอร์ไม้ไผ่
              </h3>
              <p>
                อุปกรณ์ที่ช่วยให้สามารถบินได้
              </p>
            </div>

            <div className="gadget">
              <span>03</span>
              <div>🔦</div>
              <h3>
                ไฟฉายย่อส่วน
              </h3>
              <p>
                ทำให้สิ่งของมีขนาดเล็กลง
              </p>
            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <div>
          <strong>NOBITA</strong>
          <span> CHARACTER DATABASE</span>
        </div>

        <p>
          © 2026 Character Profile Website
        </p>

      </footer>

    </div>
  );
}

export default App;