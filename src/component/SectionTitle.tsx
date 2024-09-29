import '../styles/style.css'

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
    <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-500">{subtitle}</p>
    </div>
);

export default SectionTitle;
