import React from 'react';
import { Shield, AlertCircle, Phone, Map } from 'lucide-react';
import LegalRights from '../Components/Legal';
import { NavLink } from 'react-router-dom';

const Prevention = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Safety Prevention Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Knowledge and preparation are key to personal safety. Review these guidelines and tips to stay protected.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {safetyTips.map((tip, index) => (
          <SafetyTipCard key={index} icon={tip.icon} title={tip.title} tips={tip.tips} />
        ))}
      </div>

      <div className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Emergency Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyResources.map((resource, index) => (
            <ResourceCard key={index} icon={resource.icon} title={resource.title} description={resource.description} link={resource.link} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Safety Checklist</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {safetyChecklist.map((item, index) => (
            <ChecklistItem key={index} title={item.title} items={item.items} />
          ))}
        </div>
        <LegalRights />
      </div>
    </div>
  );
};

const SafetyTipCard = ({ icon, title, tips }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <ul className="space-y-2">
      {tips.map((tip, index) => (
        <li key={index} className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          {tip}
        </li>
      ))}
    </ul>
  </div>
);

const ResourceCard = ({ icon, title, description, link }) => (
  <div className="bg-white rounded-lg p-6">
    <div className="flex items-center mb-3">
      {icon}
      <h3 className="font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <NavLink
      to={link}
      className="text-purple-600 hover:text-purple-800 font-medium"
      rel="noopener noreferrer"
    >
      Learn More →
    </NavLink>
  </div>
);

const ChecklistItem = ({ title,  items }) => (
  <div>
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
          />
          <span className="ml-2">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const safetyTips = [
  {
    icon: <Shield className="h-6 w-6 text-purple-600" />, 
    title: "Personal Safety", 
    tips: [
      "Stay aware of your surroundings", 
      "Trust your instincts", 
      "Keep emergency contacts readily available", 
      "Share your location with trusted contacts"
    ]
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-purple-600" />, 
    title: "Travel Safety", 
    tips: [
      "Plan your route in advance", 
      "Stay in well-lit areas", 
      "Keep valuables secure", 
      "Use trusted transportation services"
    ]
  },
  {
    icon: <Phone className="h-6 w-6 text-purple-600" />, 
    title: "Digital Safety", 
    tips: [
      "Keep your phone charged", 
      "Install safety apps", 
      "Enable emergency SOS features", 
      "Regularly update emergency contacts"
    ]
  }
];

const emergencyResources = [
  {
    icon: <Phone className="h-6 w-6 text-red-500" />, 
    title: "Emergency Helpline", 
    description: "24/7 women's safety helpline for immediate assistance", 
    link: "/helpline"
  },
  {
    icon: <Map className="h-6 w-6 text-blue-500" />, 
    title: "Safe Zones", 
    description: "Map of verified safe zones and emergency centers", 
    link: "#"
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />, 
    title: "Support Groups", 
    description: "Connect with local women's support groups", 
    link: "/"
  }
];

const safetyChecklist = [
  {
    title: "Daily Safety Routine", 
    items: [
      "Check phone battery", 
      "Share location with trusted contacts", 
      "Keep emergency numbers accessible", 
      "Plan safe routes"
    ]
  },
  {
    title: "Emergency Preparedness", 
    items: [
      "Update emergency contacts", 
      "Test SOS features", 
      "Keep basic self-defense tools", 
      "Save local police station numbers"
    ]
  }
];

export default Prevention;
