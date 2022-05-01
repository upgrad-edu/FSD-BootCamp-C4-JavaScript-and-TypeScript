function catchException() {
    const x = 50;
    const y = 0;
    try {
        const z = x / y;
    } catch (error) {
        console.log("Error: ", error);
    }
}

catchException();