import React from 'react';
import './Pricing.css';

export default function Pricing() {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      title: "Web Development",
      description: 'Professional websites and web applications tailored to your business needs',
      features: [
        "Mobile-responsive design",
        "SEO-friendly structure",
        "User authentication",
        "Database integration",
        "Admin dashboard",
        "API integrations",
        "Cloud deployment"
      ],
      icon: "💻",
      plans: [
        {
          name: 'Starter',
          price: 99,
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
          price: 339,
          duration: 'one-time',
          popular: true,
          bestFor: 'Growing businesses',
          features: [
            '5-page custom website',
            'Advanced contact forms',
            'Custom CMS integration',
            'Basic web app features',
            'Database integration',
            '3 revision rounds',
            '16 Days delivery',
            '3 months support'
          ]
        },
        {
          name: 'Enterprise',
          price: 1049,
          duration: 'one-time',
          bestFor: 'Large businesses & complex apps',
          features: [
            '10-page custom website',
            'Full web application',
            'Advanced web app features',
            'User authentication',
            'Admin dashboard',
            'API development',
            'Cloud deployment',
            'Unlimited revisions',
            '25 Days delivery',
            '6 months support'
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Development',
      title: "Mobile App Development",
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform development",
        "Mobile UI/UX design",
        "App store deployment"
      ],
      icon: "📱",
      plans: [
        {
          name: 'Basic',
          price: 170,
          duration: 'one-time',
          bestFor: 'Simple mobile apps',
          features: [
            'Single platform (iOS or Android)',
            'Basic UI design',
            'Simple functionality',
            'App store submission',
            '14 Days delivery',
            '1 month support'
          ]
        },
        {
          name: 'Professional',
          price: 429,
          duration: 'one-time',
          popular: true,
          bestFor: 'Business mobile apps',
          features: [
            'Cross-platform (iOS & Android)',
            'Custom UI/UX design',
            'User authentication',
            'Database integration',
            'Push notifications',
            '21 Days delivery',
            '3 months support'
          ]
        },
        {
          name: 'Enterprise',
          price: 1200,
          duration: 'one-time',
          bestFor: 'Complex mobile solutions',
          features: [
            'Advanced cross-platform app',
            'Custom animations',
            'Offline functionality',
            'Advanced security',
            'API integrations',
            'App store optimization',
            '30 Days delivery',
            '6 months support'
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Desktop App Development',
      title: "Desktop App Development",
      description: 'Native and cross-platform Desktop applications for Windows,macOS and Linux',
      features: [
        "Native Windows app development",
        "Native macOS app development",
        "Native Linux app development",
        "Cross-platform development",
        "Desktop UI/UX design",
        "Installation package"
      ],
      plans: [
        {
          name: 'Basic',
          price: 120,
          duration: 'one-time',
          bestFor: 'Simple desktop tools',
          features: [
            'Single platform (Windows, macOS, or Linux)',
            'Basic UI design',
            'Core functionality',
            'Installation package',
            '10 Days delivery',
            '1 month support'
          ]
        },
        {
          name: 'Professional',
          price: 349,
          duration: 'one-time',
          popular: true,
          bestFor: 'Business desktop applications',
          features: [
            'Cross-platform (Windows, macOS, Linux)',
            'Professional UI design',
            'Database integration',
            'File system integration',
            'Auto-updater',
            '18 Days delivery',
            '3 months support'
          ]
        },
        {
          name: 'Enterprise',
          price: 749,
          duration: 'one-time',
          bestFor: 'Complex desktop solutions',
          features: [
            'Advanced cross-platform app',
            'Custom UI/UX design',
            'Advanced system integration',
            'Offline-first architecture',
            'Performance optimization',
            'Custom licensing system',
            '25 Days delivery',
            '6 months support'
          ]
        }
      ]
    },
    {
      id: 4,
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
          price: 99,
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
          price: 299,
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
          price: 649,
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