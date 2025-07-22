document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Python', 
            'SQL', 
            'Airflow', 
            'dbt', 
            'Docker',
            'Cloud (Básico)', 
            'Git',
            'JavaScript',
            'React',
            'Node.js'
            ],
            datasets: [{
                label: 'Habilidades de Datos y DevOps',
                data: [80, 70, 60, 60, 50, 70, 80, 80, 70, 60],
                backgroundColor: 'rgba(8, 145, 178, 0.2)',
                borderColor: 'rgba(8, 145, 178, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(8, 145, 178, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(8, 145, 178, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        color: '#334155'
                    },
                    ticks: {
                        backdropColor: 'rgba(253, 251, 248, 1)',
                        color: '#64748b',
                        stepSize: 20,
                        display: false
                    },
                     min: 0,
                     max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                     callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
});