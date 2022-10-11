import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  scales: {
    y: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 20,
      }
    }
  }
};

const labels = ['Junho', 'Fevereiro', 'Março', 'Abril', 'Março', 'Junho', 'Julho'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChart() {
  return (
    <Bar data={data} options={options} />
  )
}