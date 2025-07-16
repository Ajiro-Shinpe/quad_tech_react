import React from 'react';
import './Pricing.css';

export default function Pricing() {
  const services = [
    {
      id: 1,
      name: 'Website Development',
      title: "Web Development",
      description: 'Professional websites tailored to your business needs',
      features: [
        "Mobile-responsive design",
        "SEO-friendly structure",
        "Fast loading speeds",
        "Contact forms integration",
        "Social media integration"
      ],
      icon: "💻",
      plans: [
        {
          name: 'Starter',
          price: 90,
          duration: 'one-time',
          bestFor: 'Small businesses & startups',
          features: [
            '1-page custom website',
            'Basic contact form',
            'Mobile responsive design',
            '1 revision round',
            '7 Days delivery',
            '1 month support'
          ]
        },
        {
          name: 'Business',
          price: 250,
          duration: 'one-time',
          popular: true,
          bestFor: 'Growing businesses',
          features: [
            '5-page custom website',
            'Advanced contact forms',
            'Custom CMS integration',
            'Basic SEO setup',
            '3 revision rounds',
            '16 Days delivery',
            '3 months support'
          ]
        },
        {
          name: 'Enterprise',
          price: 540,
          duration: 'one-time',
          bestFor: 'Large businesses & e-commerce',
          features: [
            '10-page custom website',
            'E-commerce functionality',
            'Advanced SEO optimization',
            'Custom animations',
            'Unlimited revisions',
            '25 Days delivery',
            '6 months support'
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Web Application',
      title: "Web App Development",
      description: 'Custom web applications with advanced functionality',
      features: [
        "User authentication",
        "Database integration",
        "Admin dashboard",
        "API integrations",
        "Cloud deployment"
      ],
      icon: "🌐",
      plans: [
        {
          name: 'Basic',
          price: 20000,
          duration: 'one-time',
          bestFor: 'MVP or small applications',
          features: [
            'Single-page application',
            'Basic CRUD operations',
            'Simple UI design',
            '7 Days delivery',
            '1 month support'
          ]
        },
        {
          name: 'Professional',
          price: 35000,
          duration: 'one-time',
          popular: true,
          bestFor: 'Business applications',
          features: [
            'Multi-page application',
            'User authentication',
            'Database integration',
            'Admin dashboard',
            '15 Days delivery',
            '3 months support'
          ]
        },
        {
          name: 'Custom',
          price: 60000,
          duration: 'one-time',
          bestFor: 'Complex enterprise solutions',
          features: [
            'Full custom development',
            'Advanced security features',
            'API integrations',
            'Cloud deployment',
            'Custom reporting',
            '22 Days development',
            '6 months support'
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'WordPress',
      title: "WordPress Development",
      description: 'Professional WordPress websites and online stores',
      features: [
        "Custom theme development",
        "WooCommerce integration",
        "Performance optimization",
        "Security hardening",
        "SEO ready"
      ],
      icon: "🖥️",
      plans: [
        {
          name: 'Basic',
          price: 20000,
          duration: 'one-time',
          bestFor: 'Blogs & small business sites',
          features: [
            'Premium theme setup',
            '5-page website',
            'Basic SEO setup',
            'Contact form',
            '6 Days delivery'
          ]
        },
        {
          name: 'Business',
          price: 30000,
          duration: 'one-time',
          popular: true,
          bestFor: 'Online stores & business sites',
          features: [
            'Custom theme development',
            'WooCommerce setup',
            'Product catalog (50 items)',
            'Payment gateway integration',
            '12 Days delivery',
            '1 month support'
          ]
        },
        {
          name: 'Enterprise',
          price: 65000,
          duration: 'one-time',
          bestFor: 'Large e-commerce sites',
          features: [
            'Full custom development',
            'Unlimited products',
            'Membership system',
            'Multilingual support',
            '22 Days delivery',
            '3 months support'
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'UI/UX Design',
      title: "UI/UX Design",
      description: 'Beautiful and functional user interfaces',
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "UI design",
        "Design systems"
      ],
      icon: "🎨",
      plans: [
        {
          name: 'Basic',
          price: 6000,
          duration: 'project',
          bestFor: 'Startups & MVPs',
          features: [
            '3 screen designs',
            'Basic wireframes',
            '1 revision round',
            '6 Days delivery'
          ]
        },
        {
          name: 'Professional',
          price: 14000,
          duration: 'project',
          popular: true,
          bestFor: 'Web & mobile apps',
          features: [
            '10+ screen designs',
            'Interactive prototype',
            'Style guide',
            '3 revision rounds',
            '14 Days delivery'
          ]
        },
        {
          name: 'Enterprise',
          price: 25000,
          duration: 'project',
          bestFor: 'Complex applications',
          features: [
            'Complete design system',
            'User testing included',
            'Animation prototypes',
            'Unlimited revisions',
            'Brand guidelines',
            '20 Days delivery'
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Graphic Design',
      title: "Graphic Design",
      description: 'Professional branding and marketing materials',
      features: [
        "Logo design",
        "Brand identity",
        "Print materials",
        "Social media graphics",
        "Packaging design"
      ],
      icon: "✏️",
      plans: [
        {
          name: 'Starter',
          price: 5000,
          duration: 'one-time',
          bestFor: 'Startups & small businesses',
          features: [
            '2 logo concepts',
            '1 revision',
            'Basic brand colors',
            '3 days delivery'
          ]
        },
        {
          name: 'Brand Kit',
          price: 8000,
          duration: 'one-time',
          popular: true,
          bestFor: 'Established businesses',
          features: [
            '5 logo concepts',
            'Full brand identity',
            'Business cards',
            'Social media kit',
            '6 Days delivery'
          ]
        },
        {
          name: 'Complete Branding',
          price: 15000,
          duration: 'one-time',
          bestFor: 'Businesses needing full branding',
          features: [
            '15 logo concepts',
            'Print materials',
            'Packaging design',
            'Brand guidelines',
            'Stationery design',
            '18 Days delivery'
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'SEO',
      title: "SEO Services",
      description: 'Improve your search rankings and organic traffic',
      features: [
        "Keyword research",
        "On-page optimization",
        "Content strategy",
        "Link building"
      ],
      icon: "🔍",
      plans: [
        {
          name: 'Starter',
          price: 14000,
          duration: 'month',
          bestFor: 'New websites',
          features: [
            'Keyword research',
            'Basic on-page SEO',
            'Monthly report',
            '5 backlinks/month'
          ]
        },
        {
          name: 'Growth',
          price: 20000,
          duration: 'month',
          popular: true,
          bestFor: 'Businesses wanting more traffic',
          features: [
            'Advanced on-page SEO',
            'Technical SEO audit',
            'Content optimization',
            '15 backlinks/month',
            'Weekly reports'
          ]
        },
        {
          name: 'Enterprise',
          price: 35000,
          duration: 'month',
          bestFor: 'E-commerce & competitive niches',
          features: [
            'Comprehensive SEO strategy',
            'E-commerce SEO',
            'Local SEO',
            '30+ backlinks/month',
            'Weekly monitoring',
            'Priority support'
            
          ]
        }
      ]
    }
  ];

  return (
    <div className="pricing-container" data-scroll-section>
      <header className="pricing-header">
        <h1>Transparent Pricing Plans</h1>
        <p className="pricing-intro">
          Affordable solutions for every business size. All plans include free consultations and dedicated support.
        </p>
        <hr />
      </header>

      {services.map(service => (
        <section key={service.id} className="service-section">
          <div className="service-header">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
          
          <div className="pricing-cards">
            {service.plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="price">
                ${plan.price}<span>/{plan.duration}</span>
                </p>
                <p className="best-for">{plan.bestFor}</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}