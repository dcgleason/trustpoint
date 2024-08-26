'use client';
import { useState } from 'react';

const coffeeSpots = [
  { name: "Thinking Cup", address: "165 Tremont St, Boston, MA 02111" },
  { name: "Tatte Bakery & Cafe", address: "399 Boylston St, Boston, MA 02116" },
  { name: "Pavement Coffeehouse", address: "1096 Boylston St, Boston, MA 02215" },
  { name: "George Howell Coffee", address: "505 Washington St, Boston, MA 02111" },
  { name: "Render Coffee", address: "563 Columbus Ave, Boston, MA 02118" },
  { name: "Ogawa Coffee", address: "10 Milk St, Boston, MA 02108" },
  { name: "Barrington Coffee Roasting Company", address: "303 Newbury St, Boston, MA 02115" },
  { name: "Jaho Coffee Roaster & Wine Bar", address: "665 Washington St, Boston, MA 02111" },
  { name: "Boston Public Library Courtyard Restaurant", address: "700 Boylston St, Boston, MA 02116" },
  { name: "Cafe Nero", address: "560 Washington St, Boston, MA 02111" },
  { name: "Explorateur", address: "186 Tremont St, Boston, MA 02111" },
  { name: "Flour Bakery + Cafe", address: "190 Massachusetts Ave, Boston, MA 02115" },
  { name: "Trident Booksellers & Cafe", address: "338 Newbury St, Boston, MA 02115" },
  { name: "Blue Bottle Coffee", address: "40 Bow St, Cambridge, MA 02138" },
  { name: "1369 Coffee House", address: "1369 Cambridge St, Cambridge, MA 02139" },
  { name: "Caffè Bene", address: "333 Massachusetts Ave, Boston, MA 02115" },
  { name: "Capital One Café", address: "799 Boylston St, Boston, MA 02116" },
  { name: "Caffè Nero", address: "55 Northern Ave, Boston, MA 02210" },
  { name: "Equal Exchange Cafe", address: "226 Causeway St, Boston, MA 02114" },
  { name: "Neighborhoods Coffee & Crepes", address: "96 Peterborough St, Boston, MA 02215" },
  { name: "Cuppa Coffee", address: "1 Merrimac St, Boston, MA 02114" },
  { name: "Cafe Bonjour", address: "55 Temple Pl, Boston, MA 02111" },
  { name: "Caffè Vittoria", address: "290 Hanover St, Boston, MA 02113" },
  { name: "Gracenote Coffee", address: "108 Lincoln St, Boston, MA 02111" }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    gender: '',
    yearsLearningCode: '',
    personalityDescription: '',
    age: '',
    occupation: '',
    oneYearGoal: '',
    fiveYearGoal: '',
    preferredSpokenLanguage: '',
    learn: '',
    availability: '', // Added for availability
  });

  const [skills, setSkills] = useState([{ skill: '', years: '' }]);

  const [submitted, setSubmitted] = useState(false);

  // Waitlist form state
  const [waitlistData, setWaitlistData] = useState({
    email: '',
    city: '',
    state: '',
    country: '',
  });

  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleWaitlistChange = (e) => {
    const { name, value } = e.target;
    setWaitlistData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index][name] = value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: '', years: '' }]);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, skills }),
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(waitlistData),
    });
    if (response.ok) {
      setWaitlistSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-4xl sm:mx-auto flex space-x-6">
        {/* Original Registration Form */}
        <div className="relative flex-3">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-lg mx-auto">
              <div>
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Code Buddy Finder (Boston, MA)</h1>
              </div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                      <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                        {key === 'personalityDescription' ? 'A friend would describe me as...' 
                        : key === 'learn' ? 'I want to learn...'
                        : key === 'availability' ? 'General availability'
                        : key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      {key === 'gender' ? (
                        <select
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-900 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          required
                        >
                          <option value="">Select...</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer_not_to_say">Prefer not to say</option>
                        </select>
                      ) : key.includes('Goal') || key === 'personalityDescription' || key === 'learn' || key === 'availability' ? (
                        <textarea
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleChange}
                          rows="3"
                          className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                          required
                        />
                      ) : (
                        <input
                          type={key === 'age' || key === 'yearsLearningCode' ? 'number' : 'text'}
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleChange}
                          className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                          required
                        />
                      )}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 capitalize mb-1">Skills</label>
                    {skills.map((skill, index) => (
                      <div key={index} className="flex space-x-2 mb-2">
                        <input
                          type="text"
                          name="skill"
                          value={skill.skill}
                          onChange={(e) => handleSkillChange(index, e)}
                          placeholder="Skill"
                          className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                          required
                        />
                        <input
                          type="number"
                          name="years"
                          value={skill.years}
                          onChange={(e) => handleSkillChange(index, e)}
                          placeholder="Years"
                          className="block w-20 shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                          required
                        />
                        <button type="button" onClick={() => handleRemoveSkill(index)} className="text-red-600">
                          -
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={handleAddSkill} className="text-blue-600">
                      + Add Skill
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Register
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-xl text-center text-green-600">Thanks for registering! We&apos;ll match you with a local code buddy soon.</p>
              )}
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="relative flex-1">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-8">
            <div className="max-w-sm mx-auto">
              <div>
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Not in Boston? Join the Waitlist</h2>
              </div>
              {!waitlistSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="waitlistEmail" className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="waitlistEmail"
                      name="email"
                      value={waitlistData.email}
                      onChange={handleWaitlistChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={waitlistData.city}
                      onChange={handleWaitlistChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={waitlistData.state}
                      onChange={handleWaitlistChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={waitlistData.country}
                      onChange={handleWaitlistChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-blue-500 text-gray-900 focus:border-blue-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-xl text-center text-green-600">Thanks for joining the waitlist! We&apos;ll notify you when we expand to your location.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Our Favorite Coding Spots in Boston */}
      <div className="relative py-10 sm:max-w-4xl sm:mx-auto mt-12">
        <h3 className="text-2xl font-extrabold text-center text-gray-900 mb-6">Our Favorite Coding Spots in Boston</h3>
        <ul className="list-disc list-inside">
          {coffeeSpots.map((spot, index) => (
            <li key={index}>
              <span className="font-semibold">{spot.name}</span> - {spot.address}
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Thank you for registering!</h3>
            <p>Someone should be reaching out within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Waitlist Success Modal */}
      {waitlistSubmitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-bold mb-4">We&apos;ll let you know when we&apos;re in your city!</h3>
              <p>Thank you for joining the waitlist.</p>
              <button
                onClick={() => setWaitlistSubmitted(false)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
)}
    </div>
  );
}