// Example client-side TypeScript code
import './styles.css';

interface ApiResponse {
  message: string;
}

const testBtn = document.getElementById('testBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

testBtn?.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/hello');
    const data: ApiResponse = await response.json();
    resultDiv.textContent = `API Response: ${data.message}`;
  } catch (error) {
    resultDiv.textContent = 'Error calling API';
    console.error('Error:', error);
  }
});

console.log('Client-side TypeScript loaded successfully!');
