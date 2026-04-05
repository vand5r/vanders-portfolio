# Vanders - Roblox Developer Portfolio

A modern, responsive single-page portfolio website showcasing Roblox game development work.

## 🎮 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Layout** - Home, About Me, and Contact all in one page with smooth scrolling
- **Modern Styling** - Clean, professional design with gradient backgrounds and animations
- **Mobile Menu** - Hamburger menu for mobile navigation
- **Contact Form** - Functional contact form with validation
- **Project Showcase** - Display your Roblox creations with featured projects section
- **Social Links** - Connect with visitors through various platforms
- **Smooth Animations** - Eye-catching animations and transitions throughout

## 📁 Project Structure

```
vanders-portfolio/
├── index.html        # Main HTML file containing all content
├── styles.css        # All styling and responsive design
├── script.js         # JavaScript for interactivity and form handling
└── README.md         # This file
```

## 🚀 Getting Started

### Option 1: Open in Browser
Simply open `index.html` in your web browser. No setup required!

### Option 2: Local Server (Recommended)
For better development experience, run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📝 How to Customize

### 1. Update Your Information

#### Personal Details (index.html)
- Line 22: Change "Hi, I'm Vanders" to your name
- Line 23-25: Update your bio and description
- Update social media links in the Contact section (lines 122-127)

#### Navigation
- Line 16: Update the logo text (currently "Vanders")

### 2. Add Your Projects

In the Featured Projects section (around line 71):
```html
<div class="project-card">
    <div class="project-header">
        <h4>Your Project Name</h4>
        <span class="project-status">Live</span>  <!-- or "In Development" -->
    </div>
    <p>Your project description goes here</p>
    <a href="https://your-project-link.com" class="project-link">Learn More →</a>
</div>
```

### 3. Modify Colors

Edit the CSS variables in `styles.css` (lines 8-16):
```css
--primary-color: #e84855;      /* Red accent */
--secondary-color: #254441;    /* Dark teal */
--accent-color: #f7b801;       /* Gold/yellow */
--text-color: #333;
--light-bg: #f8f9fa;
```

### 4. Update Skills

Modify the Skills section in the About Me area (around line 50):
```html
<div class="skill-card">
    <h4>Your Skill</h4>
    <p>Your skill description</p>
</div>
```

### 5. Configure Contact Form

The contact form currently logs to the browser console. To send emails, you'll need a backend service:

**Option A: FormSubmit (Free)**
1. Replace the form's action attribute with: `https://formsubmit.co/your-email@example.com`
2. Update the form method to POST

**Option B: Netlify Forms**
1. Deploy your site to Netlify
2. Add `netlify` attribute to the form
3. Netlify handles form submissions automatically

**Option C: Your Own Backend**
Modify the form submission in `script.js` (lines 61-75) to send data to your server endpoint.

## 🎨 Customization Tips

### Font Changes
- The site uses Segoe UI by default
- To change, modify line 36 in `styles.css`:
```css
font-family: 'Your Font', Tahoma, Geneva, Verdana, sans-serif;
```

### Add Custom Images
Create an `assets` or `images` folder and reference them in HTML:
```html
<img src="assets/my-project.png" alt="Project Description">
```

### Change Spacing
Adjust padding and margins by modifying values in `styles.css`:
- Sections padding: Look for `.about`, `.contact` sections (e.g., line 243)
- Component spacing: Modify `gap` values in grid layouts

## 🌐 Deployment Options

### Netlify (Recommended - Free)
1. Connect your GitHub repository
2. Netlify automatically deploys on push
3. Get free HTTPS and custom domain support

### GitHub Pages (Free)
1. Rename repository to `username.github.io`
2. Push to main branch
3. Site automatically available at `https://username.github.io`

### Vercel (Free)
1. Connect your GitHub repo via vercel.com
2. Automatic deployments on push

### Traditional Hosting
Upload all files to any web hosting service via FTP/SFTP

## 📧 Form Submission

Currently the form validates input and shows a success message. To actually receive emails:

### Option 1: FormSubmit
```html
<form action="https://formsubmit.co/your.email@gmail.com" method="POST">
    <!-- existing form fields -->
</form>
```

### Option 2: Modify Script
Update `script.js` lines 61-75 to send data to your backend API endpoint.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- 768px (Tablets)
- 480px (Mobile phones)

## 🐛 Troubleshooting

### Form not working?
- Check browser console for errors (F12 → Console tab)
- Ensure all field IDs match between HTML and JavaScript
- Verify email validation regex in `script.js`

### Navigation not smooth scrolling?
- Ensure `id` attributes match `href` links
- Check browser's `scroll-behavior` CSS support

### Mobile menu not appearing?
- Clear cache and hard refresh (Ctrl+Shift+R)
- Check hamburger CSS in `styles.css` around line 96

## 📚 Resources

- [Roblox Developer Hub](https://developer.roblox.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

## 📄 License

Feel free to use this portfolio template for your personal use and modify it as needed.

---

**Created for Roblox Game Developers** ⚙️🎮
