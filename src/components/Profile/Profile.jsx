import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function Profile() {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//     // ... أي حقول أخرى
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // dispatch(updateProfile(formData));
//   };
  return (
    <div>
      {/* <h1>صفحة البروفايل</h1>
      <form onSubmit={handleSubmit}>
        <label>
          الاسم:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          البريد الإلكتروني:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* أي حقول أخرى */}
        {/* <br />
        <button type="submit">حفظ التغييرات</button>
      </form> */} 
    </div>
  );
}

export default Profile;
