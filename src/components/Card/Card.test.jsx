import { render, screen } from '@testing-library/react';
import Card from './Card';

test("Mostra o nome do produto", () => {
    render(
    <Card title={"Camisa Polo"} price={99.99} />
    );
    expect(screen.getByText("Camisa Polo")).toBeInTheDocument();
});

