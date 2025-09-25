/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 5px 30px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.logo h2 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.logo i {
    margin-right: 12px;
    color: #667eea;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-menu a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    padding: 8px 0;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
    border-radius: 2px;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
    width: 100%;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: #667eea;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 4px;
}

.hamburger span {
    width: 28px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 140px 20px 120px;
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    flex: 1;
    max-width: 650px;
    z-index: 2;
    animation: fadeInUp 1s ease-out;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 25px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -2px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.hero-content p {
    font-size: 1.4rem;
    margin-bottom: 40px;
    opacity: 0.95;
    font-weight: 400;
    line-height: 1.5;
}

.hero-buttons {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 18px 40px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: #fff;
    color: #667eea;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-primary:hover {
    background: #f8f9ff;
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.btn-secondary {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.5);
    transform: translateY(-3px);
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: fadeInRight 1s ease-out 0.3s both;
}

.property-card-hero {
    background: rgba(255,255,255,0.15);
    padding: 50px 40px;
    border-radius: 25px;
    text-align: center;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.property-card-hero:hover {
    transform: translateY(-10px) scale(1.02);
}

.property-card-hero i {
    font-size: 5rem;
    margin-bottom: 25px;
    opacity: 0.9;
    color: #fff;
}

.property-card-hero h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: 700;
}

/* Services Section */
.services {
    padding: 120px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    position: relative;
}

.services::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="rgba(102, 126, 234, 0.1)"/><circle cx="75" cy="75" r="2" fill="rgba(118, 75, 162, 0.1)"/></svg>');
    opacity: 0.5;
}

.services h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 70px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: -1px;
    position: relative;
    z-index: 2;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    position: relative;
    z-index: 2;
}

.service-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 50px 40px;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: transform 0.6s ease;
    transform: rotate(0deg);
}

.service-card:hover::before {
    transform: rotate(180deg);
}

.service-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0,0,0,0.15);
}

.service-card i {
    font-size: 4rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
}

.service-card h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #2c3e50;
    font-weight: 700;
    position: relative;
    z-index: 2;
}

.service-card p {
    color: #5a6c7d;
    font-size: 1.1rem;
    line-height: 1.6;
    position: relative;
    z-index: 2;
}

/* Why Choose Us Section */
.why-choose {
    padding: 120px 20px;
    background: #fff;
    position: relative;
}

.content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.text-content h2 {
    font-size: 3rem;
    margin-bottom: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: -1px;
}

.text-content ul {
    list-style: none;
    margin-bottom: 40px;
}

.text-content li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #2c3e50;
    padding: 15px;
    background: rgba(102, 126, 234, 0.05);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.text-content li:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(10px);
}

.text-content li i {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50%;
    padding: 8px;
    margin-right: 20px;
    font-size: 1rem;
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.stat {
    text-align: center;
    padding: 40px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    transition: transform 0.3s ease;
}

.stat:hover {
    transform: translateY(-10px) scale(1.05);
}

.stat h3 {
    font-size: 3rem;
    margin-bottom: 15px;
    font-weight: 800;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.stat p {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 500;
}

/* Contact Preview Section */
.contact-preview {
    padding: 120px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.contact-preview::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: float 20s ease-in-out infinite;
}

.contact-preview h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 70px;
    font-weight: 800;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    position: relative;
    z-index: 2;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 50px;
    position: relative;
    z-index: 2;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 25px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
}

.contact-item i {
    font-size: 2.5rem;
    margin-top: 5px;
    opacity: 0.9;
    padding: 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
}

.contact-item h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.contact-item p {
    line-height: 1.6;
    opacity: 0.9;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 180px 20px 120px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="0,100 100,0 100,100" fill="rgba(255,255,255,0.05)"/></svg>');
    opacity: 0.5;
}

.page-header h1 {
    font-size: 3.5rem;
    margin-bottom: 25px;
    font-weight: 800;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    position: relative;
    z-index: 2;
}

.page-header p {
    font-size: 1.3rem;
    opacity: 0.9;
    position: relative;
    z-index: 2;
}

/* About Page Styles */
.about-content {
    padding: 120px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.about-image {
    text-align: center;
    padding: 60px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.5);
}

.about-image i {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.values {
    padding: 120px 20px;
    background: #fff;
}

.values h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 70px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.value-card {
    text-align: center;
    padding: 50px 30px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    border-radius: 25px;
    transition: all 0.4s ease;
    border: 1px solid rgba(102, 126, 234, 0.1);
    position: relative;
    overflow: hidden;
}

.value-card::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: transform 0.6s ease;
}

.value-card:hover::before {
    transform: rotate(180deg);
}

.value-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(102, 126, 234, 0.15);
}

.value-card i {
    font-size: 4rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
}

/* Continue with remaining styles... */

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(10px, -10px) rotate(180deg); }
}

/* Form Styles */
.contact-form {
    background: rgba(255, 255, 255, 0.95);
    padding: 50px 40px;
    border-radius: 25px;
    box-shadow: 0 25px 80px rgba(0,0,0,0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.5);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 18px 20px;
    border: 2px solid rgba(102, 126, 234, 0.2);
    border-radius: 15px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: rgba(102, 126, 234, 0.03);
    font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 80px 20px 30px;
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 50px;
    margin-bottom: 50px;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 25px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.8);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        width: 100%;
        text-align: center;
        transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        padding: 40px 0;
        gap: 20px;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding: 140px 20px 80px;
        min-height: auto;
    }

    .hero-content h1 {
        font-size: 2.8rem;
    }

    .content-wrapper {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .services-grid,
    .values-grid {
        grid-template-columns: 1fr;
    }

    .contact-info {
        grid-template-columns: 1fr;
    }
}

/* Enhanced hover effects for better interactivity */
.nav-menu a,
.btn-primary,
.btn-secondary,
.service-card,
.value-card,
.stat,
.contact-item {
    will-change: transform;
}

/* Smooth scrolling enhancement */
html {
    scroll-padding-top: 80px;
}

/* Loading animation for better UX */
.page-loading {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
}
