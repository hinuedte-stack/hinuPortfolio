# Portfolio Website - Hafiza Hydar Hinu

A modern, responsive portfolio website showcasing skills, projects, achievements, and contact information.

## Features

✅ **Home Page**
- Professional hero section with profile photo
- Attractive hero banner
- Smooth navigation

✅ **About Me Section**
- Personal introduction
- Education background with images
- Goals and aspirations
- Interactive icon-based representation

✅ **Skills & Expertise**
- 6 key skills with animated progress bars
- Interactive hover effects
- Visual indicators and descriptions

✅ **Project Gallery**
- 4 project showcases
- Thumbnail images
- Video demo integration
- Project descriptions and tags

✅ **Achievements Section**
- Course completion badges
- Certification displays
- Achievement descriptions

✅ **Contact Section**
- Social media links (Email, LinkedIn, GitHub, Twitter, Facebook)
- Contact form with validation
- Form validation with error messages

## Technologies Used

- **HTML5** - Semantic markup (header, nav, main, section, footer)
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript** - Interactive elements, form validation, smooth scrolling

## Setup Instructions

1. **Images**: The following images are already in your project:
   - `hinu image.jpg` - Profile photo
   - `college.jpeg` - College education image
   - `school.jpeg` - School education image
   - `varsity.png` - University image

2. **Video**: You need to add video files for project demos:
   - Create an `assets` folder in your project root
   - Add video files (recommended formats: MP4, WebM):
     - `assets/edulearn_demo.mp4`
     - `assets/lesson_template_demo.mp4`
     - `assets/portfolio_demo.mp4`
     - `assets/mobile_app_demo.mp4`
   
   **Note**: If you don't have video files, you can:
   - Use placeholder videos from free sources (Pexels, Pixabay)
   - Create simple screen recordings of your projects
   - Remove or comment out the video buttons temporarily

3. **Open the Website**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with all styling
├── script.js           # JavaScript for interactivity
├── README.md           # This file
│
├── hinu image.jpg      # Profile photo
├── college.jpeg        # College image
├── school.jpeg         # School image
├── varsity.png         # University image
│
└── assets/             # Create this folder for videos
    ├── edulearn_demo.mp4
    ├── lesson_template_demo.mp4
    ├── portfolio_demo.mp4
    └── mobile_app_demo.mp4
```

## Customization

### Update Contact Information
Edit the email and social media links in `index.html`:
- Search for `hafiza.hinu@email.com` and replace with your email
- Update social media URLs in the contact section

### Modify Skills
Edit the skills in the "Skills & Expertise" section of `index.html`:
- Change skill names, percentages, and descriptions
- Adjust progress bar values (data-progress attribute)

### Update Projects
Modify projects in the "Project Gallery" section:
- Change project titles, descriptions, and images
- Update project tags
- Modify demo video links

### Change Colors
Edit CSS variables in `style.css` (root section):
```css
:root {
  --primary-color: #0b63d0;
  --secondary-color: #6366f1;
  --accent-color: #8b5cf6;
  /* ... more variables */
}
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Features Breakdown

### HTML5 Semantic Tags Used
- `<header>` - Navigation and branding
- `<nav>` - Navigation links
- `<main>` - Main content
- `<section>` - Content sections
- `<article>` - Project cards
- `<footer>` - Footer information
- `<aside>` - Additional content (if needed)

### Interactive Elements
- Smooth scrolling navigation
- Hover animations on cards and buttons
- Progress bar animations on scroll
- Form validation with real-time feedback
- Video lightbox modal
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoints at 968px, 768px, and 480px
- Flexible grid layouts
- Touch-friendly interactions

## Form Validation

The contact form includes:
- Name validation (minimum 2 characters)
- Email format validation
- Message length validation (minimum 10 characters)
- Real-time error messages
- Success feedback on submission

## Notes

- All images should be optimized for web (use tools like TinyPNG or ImageOptim)
- Videos should be in web-compatible formats (MP4 recommended)
- For production, consider minifying CSS and JavaScript files
- Add your actual project images and videos for the best presentation

## License

This portfolio template is created for educational purposes.

---

**Created by**: Hafiza Hydar Hinu  
**Year**: 2025  
**Purpose**: Portfolio showcase for web development and design skills



