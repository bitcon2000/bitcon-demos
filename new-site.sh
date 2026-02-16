#!/bin/bash
# new-site.sh — generate a new site from template

set -e

if [ -z "$1" ]; then
  echo "usage: ./new-site.sh <site-name>"
  echo "example: ./new-site.sh neural-vibes"
  exit 1
fi

SITE_NAME=$1
SITE_DIR="sites/$SITE_NAME"

# Check if already exists
if [ -d "$SITE_DIR" ]; then
  echo "❌ $SITE_DIR already exists"
  exit 1
fi

mkdir -p "$SITE_DIR"

# Copy template files with site name substitution
cat > "$SITE_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{SITE_NAME}}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="stars"></div>
  
  <nav class="navbar">
    <div class="logo">{{SITE_NAME}}</div>
    <div class="nav-links">
      <a href="#work">work</a>
      <a href="#contact">contact</a>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <h1 class="title">{{SITE_NAME}}</h1>
      <p class="subtitle">{{TAGLINE}}</p>
      <button class="cta-btn">explore</button>
    </div>
  </header>

  <section id="work" class="work">
    <h2>featured work</h2>
    <div class="grid">
      <div class="card">
        <div class="card-content">
          <h3>project one</h3>
          <p>description here</p>
          <span class="tag">tag</span>
        </div>
      </div>
    </div>
  </section>

  <footer id="contact" class="footer">
    <p>let's work together. <a href="mailto:hello@{{SITE_NAME}}.dev">get in touch</a></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
EOF

cp style.css "$SITE_DIR/"
cp script.js "$SITE_DIR/"

# Update template placeholders
sed -i "s/{{SITE_NAME}}/$SITE_NAME/g" "$SITE_DIR/index.html"
sed -i "s/{{TAGLINE}}/built fast, shipped fresh/g" "$SITE_DIR/index.html"

# Create index in root that links to all sites
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <title>bitcon — vibe demos</title>
  <style>
    body { background: #0a0e27; color: #e0e0ff; font-family: sans-serif; padding: 2rem; text-align: center; }
    h1 { color: #00d4ff; }
    .sites { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 2rem; }
    .site { background: #1a1f3a; padding: 2rem; border-radius: 8px; border: 1px solid rgba(0,212,255,0.2); text-decoration: none; color: inherit; transition: all 0.3s; }
    .site:hover { border-color: #00d4ff; transform: translateY(-5px); }
  </style>
</head>
<body>
  <h1>bitcon demos</h1>
  <p>vibe-coded websites</p>
  <div class="sites" id="sites"></div>
  <script>
    fetch('sites.json').then(r => r.json()).then(sites => {
      document.getElementById('sites').innerHTML = sites.map(s => 
        `<a href="${s.path}" class="site"><h3>${s.name}</h3><p>${s.desc}</p></a>`
      ).join('');
    });
  </script>
</body>
</html>
EOF

# Create sites manifest
cat > sites.json << 'EOF'
[
  {
    "name": "bitcon",
    "desc": "main portfolio",
    "path": "./"
  }
]
EOF

echo "✅ created: $SITE_DIR/"
echo "📝 edit: $SITE_DIR/index.html"
echo "🚀 deploy: git add . && ./deploy.sh 'add: $SITE_NAME'"
