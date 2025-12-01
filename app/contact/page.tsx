const handleSubmit = async (e: any) => {
  e.preventDefault();

  const formData = {
    name,
    email,
    phone,
    projectType,
    details,
  };

  const res = await fetch("/api/send-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    setSubmitted(true);
  } else {
    alert("Something went wrong sending the email.");
  }
};
