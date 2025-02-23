# Project Documentation

## Dependencies
- jQuery (v2.1.3)
- Slick Slider (v1.8.1)

## HTML Structure

### Main Components
- Header with logo and navigation
- Main content sections:
  - Our Team
  - Personal Details
  - Contact Us
- Footer with legal links

### Key Classes
- `.navLi a` - Navigation links
- `.title` - Section headers
- `.teamSlider` - Team member carousel
- `.content` - Section content containers

## CSS Features
- Responsive design using media queries covering:
  - Laptop/Desktop (1024px and above)
  - Tablet (768px - 1023px)
  - Mobile (up to 767px)
- Separate responsive.css file for device-specific styles
- Smooth transitions and animations
- Custom styling for:
  - Navigation
  - Team slider
  - Form elements
  - Typography

## JavaScript Functionality

### Main Features
1. Navigation:
   - Click handlers for `.navLi a` and `.title`
   - Active state management
   - Content section switching

2. Team Slider:
   - Slick Slider implementation
   - Responsive breakpoints
   - Auto-play functionality
   - Refresh on navigation

### Key Functions
- `refreshSlick()` - Refreshes team slider instance

## Assumptions & Decisions
1. Navigation links use `data` attributes to map to corresponding sections
2. Slick Slider is configured for desktop-first responsive design
3. jQuery is used for DOM manipulation and event handling
4. All interactive elements maintain consistent behavior across devices
5. Content sections are hidden/shown using jQuery rather than CSS for better control

## Usage Notes
1. Ensure all dependencies are loaded before the main script
2. Include responsive.css after main stylesheet for proper cascade
3. Maintain consistent HTML structure for proper functionality
4. Use appropriate class names when adding new elements
5. Test all interactive features across different screen sizes
