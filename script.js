/*
  EDIT LINK DAN PROFIL DI FILE INI.
  Ganti URL contoh dengan link akun kamu. Hapus item yang tidak dipakai.
*/
const profile = {
  name: "Michael n'u",
  initials: "MN",
  bio: "All here wht u need just tell me. this web is asal jadi nanti gua update",
  location: "Indonesia",
  email: "hello@example.com", // Ganti dengan email kamu
  socials: [
    { icon: "◎", title: "Instagram", desc: "Daily moments & updates", url: "https://instagram.com/m1cnj" },
    { icon: "♪", title: "TikTok1", desc: "Videos, ideas & creativity", url: "https://tiktok.com/@busigosonh" },
    { icon: "♪", title: "TikTok2", desc: "Videos, ideas & creativity", url: "https://tiktok.com/@mikelhilangarah" },
    { icon: "♪", title: "TikTok3", desc: "Videos, ideas & creativity", url: "https://tiktok.com/@11.lot" },
    { icon: "♪", title: "TikTok4", desc: "Videos, ideas & creativity", url: "https://tiktok.com/@njmot0r" },
    { icon: "▶", title: "YouTube", desc: "Watch what I'm creating", url: "http://www.youtube.com/@michaelnujones" },
    { icon: "➤", title: "Telegram", desc: "Connect with me", url: "https://t.me/m1cnj" }
  ],
  otherLinks: [
    { icon: "✦", title: "My Projects", desc: "Things I'm building", url: "https://example.com/projects" },
    { icon: "◈", title: "Portfolio", desc: "A little collection of my work", url: "https://example.com/portfolio" },
    { icon: "♡", title: "Support me", desc: "Buy me a coffee", url: "https://sociabuzz.com/m1cnj3/tribe" }
  ]
};

const $ = (id) => document.getElementById(id);
$("displayName").textContent = profile.name;
// Tidak mengubah foto: index.html sudah menampilkan pp.jpeg melalui tag img.
$("bio").textContent = profile.bio;
$("location").textContent = profile.location;
$("footerName").textContent = profile.name.toUpperCase();
$("year").textContent = new Date().getFullYear();
$("emailButton").href = `mailto:${profile.email}`;
$("featureContact").href = `mailto:${profile.email}`;

function makeLink(item, index) {
  const a = document.createElement("a");
  a.className = "link-card";
  a.href = item.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.animationDelay = `${index * 75}ms`;

  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.textContent = item.icon;

  const copy = document.createElement("span");
  copy.className = "link-copy";
  const title = document.createElement("span");
  title.className = "link-title";
  title.textContent = item.title;
  const desc = document.createElement("span");
  desc.className = "link-desc";
  desc.textContent = item.desc;
  copy.append(title, desc);

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.textContent = "↗";
  a.append(icon, copy, arrow);
  return a;
}

profile.socials.forEach((item, i) => $("socialLinks").appendChild(makeLink(item, i)));
profile.otherLinks.forEach((item, i) => $("otherLinks").appendChild(makeLink(item, i)));

const toast = $("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

$("shareButton").addEventListener("click", async () => {
  const shareData = { title: `${profile.name} | All links`, text: profile.bio, url: location.href };
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(location.href);
      showToast("Link profil berhasil disalin");
    } else {
      showToast("Salin URL dari address bar browser");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Belum bisa membagikan link");
  }
});
