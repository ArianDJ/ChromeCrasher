// Function to stress CPU by generating heavy computational load
function stressCPU() {
    const numWorkers = navigator.hardwareConcurrency || 4; // Get number of CPU cores, default to 4 if not available
    const workers = [];
    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker(URL.createObjectURL(new Blob([`
            setInterval(() => {
                const start = performance.now();
                while (performance.now() - start < 1000); // Generate heavy computational load for 1 second
            }, 0);
        `])));
        workers.push(worker);
    }
}

// Function to stress memory by allocating large chunks of memory
function stressMemory() {
    const chunks = [];
    while (true) {
        try {
            const chunk = new ArrayBuffer(1024 * 1024 * 100 * 2); // Allocate 100MB memory chunk
            chunks.push(chunk);
        } catch (error) {
            console.error('Memory allocation failed:', error);
            break;
        }
    }
}

// Start stressing CPU and memory
stressCPU();
stressMemory();
