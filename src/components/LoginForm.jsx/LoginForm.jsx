import { useState } from 'react';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          email
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          password
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">LogIN</button>
      </form>
    </div>
  );
};
