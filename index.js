// This tells the app: "Use the port Render gives us, OR 3000 if we are on my laptop."
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});