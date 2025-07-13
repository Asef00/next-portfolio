import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Create sections
    const sections = [
      {
        title: 'Web Development',
        description:
          'Modern web applications built with cutting-edge technologies',
        slug: 'web-development',
        order: 1,
        image: '/images/sections/web-dev.jpg',
      },
      {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications',
        slug: 'mobile-apps',
        order: 2,
        image: '/images/sections/mobile.jpg',
      },
      {
        title: 'UI/UX Design',
        description: 'Beautiful and intuitive user interfaces',
        slug: 'ui-ux-design',
        order: 3,
        image: '/images/sections/design.jpg',
      },
    ]

    // Create portfolio items
    const portfolioItems = [
      {
        name: 'E-commerce Platform',
        slug: 'ecommerce-platform',
        year: '2024',
        image: '/images/portfolio/ecommerce.jpg',
        description:
          'A full-featured e-commerce platform with real-time inventory management',
        content:
          'Built with Next.js, TypeScript, and PostgreSQL. Features include real-time inventory tracking, secure payment processing, and an intuitive admin dashboard.',
        category: 'web-development',
      },
      {
        name: 'Fitness Tracking App',
        slug: 'fitness-tracker',
        year: '2023',
        image: '/images/portfolio/fitness.jpg',
        description: 'Mobile app for tracking workouts and nutrition',
        content:
          'Developed using React Native and Firebase. Includes features like workout planning, progress tracking, and nutrition logging.',
        category: 'mobile-apps',
      },
      {
        name: 'Dashboard Redesign',
        slug: 'dashboard-redesign',
        year: '2024',
        image: '/images/portfolio/dashboard.jpg',
        description: 'Modern dashboard interface for analytics platform',
        content:
          'Complete redesign of an analytics dashboard focusing on user experience and data visualization. Implemented using Figma and React.',
        category: 'ui-ux-design',
      },
    ]

    console.log('Seeding sections...')
    for (const section of sections) {
      await prisma.section.upsert({
        where: { slug: section.slug },
        update: section,
        create: section,
      })
    }

    console.log('Seeding portfolio items...')
    for (const item of portfolioItems) {
      await prisma.portfolioItem.upsert({
        where: { slug: item.slug },
        update: item,
        create: item,
      })
    }

    console.log('Seeding completed!')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
