const Card = () => {
  return (
    <div className="profile-card-wrapper">
      <div className="pc-card">
        <button className="pc-mail">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={20} height={16} x={2} y={4} rx={2} /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        </button>
        <div className="pc-profile-pic">
          <img src="/foto1.jpeg" alt="Dimas Sholihulhadi" />
        </div>
        <div className="pc-bottom">
          <div className="pc-info">
            <span className="pc-name">Dimas Sholihulhadi</span>
            <span className="pc-about">Mahasiswa Sistem Informasi di Itenas Bandung · Web Developer &amp; Data Science Enthusiast.</span>
          </div>
          <div className="pc-actions">
            <div className="pc-socials">
              <a href="https://github.com/Dss02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/dimassholihulhadi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <a href="mailto:dimas.sholihulhadi@gmail.com" className="pc-btn">Contact Me</a>
          </div>
        </div>
      </div>

      <style>{`
  .profile-card-wrapper {
    --pc-accent: #a1a1aa;
    --pc-bg: rgba(24, 24, 27, 0.92);
    --pc-border: rgba(255, 255, 255, 0.1);
  }

  .profile-card-wrapper .pc-card {
    width: 340px;
    height: 380px;
    background: rgba(39, 39, 42, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--pc-border);
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 40px 30px -30px;
    transition: all 0.5s ease-in-out;
  }

  /* ── Mail icon (top-right) ── */
  .profile-card-wrapper .pc-mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
    z-index: 10;
    cursor: pointer;
  }
  .profile-card-wrapper .pc-mail svg {
    stroke: var(--pc-accent);
    stroke-width: 3px;
    transition: stroke 0.3s;
  }
  .profile-card-wrapper .pc-mail svg:hover {
    stroke: #fff;
  }

  /* ── Profile picture ── */
  .profile-card-wrapper .pc-profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
  }
  .profile-card-wrapper .pc-profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
    transition: all 0.5s ease-in-out 0s;
  }

  /* ── Bottom panel ── */
  .profile-card-wrapper .pc-bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    top: 80%;
    background: var(--pc-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid var(--pc-border);
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  /* ── Info (name + about) ── */
  .profile-card-wrapper .pc-info {
    padding: 1.25rem 1.5rem 0.5rem;
    overflow: hidden;
  }
  .profile-card-wrapper .pc-name {
    display: block;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 700;
    line-height: 1.3;
  }
  .profile-card-wrapper .pc-about {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.78rem;
    color: var(--pc-accent);
    margin-top: 0.5rem;
    line-height: 1.5;
  }

  /* ── Actions row (socials + button) ── */
  .profile-card-wrapper .pc-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem 1.5rem;
    gap: 1rem;
  }

  /* Social links */
  .profile-card-wrapper .pc-socials {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .profile-card-wrapper .pc-socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pc-accent);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.05);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  .profile-card-wrapper .pc-socials a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  .profile-card-wrapper .pc-socials svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  /* Contact button */
  .profile-card-wrapper .pc-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #18181b;
    border: none;
    border-radius: 99px;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0 1.25rem;
    height: 38px;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .profile-card-wrapper .pc-btn:hover {
    background: #e4e4e7;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  /* ── Hover states ── */
  .profile-card-wrapper .pc-card:hover {
    border-top-left-radius: 55px;
  }
  .profile-card-wrapper .pc-card:hover .pc-bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }
  .profile-card-wrapper .pc-card:hover .pc-profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    z-index: 3;
    border: 4px solid rgba(255,255,255,0.15);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }
  .profile-card-wrapper .pc-card:hover .pc-profile-pic:hover {
    transform: scale(1.2);
    border-radius: 0;
  }
  .profile-card-wrapper .pc-card:hover .pc-profile-pic img {
    transform: scale(1);
    object-position: center;
    transition: all 0.5s ease-in-out 0.5s;
  }
      `}</style>
    </div>
  );
}

export default Card;
