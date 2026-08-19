import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '@repo/ui/tag';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'TypeScript',
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag>React</Tag>
      <Tag>Next.js</Tag>
      <Tag>Tailwind</Tag>
    </div>
  ),
};
