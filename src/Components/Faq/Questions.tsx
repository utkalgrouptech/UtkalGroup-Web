"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Input,
  Typography,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  Search as SearchIcon,
  ChatBubbleOutline,
  Phone,
  Email,
} from "@mui/icons-material";


const faqData = [
  {
    id: 1,
    question: "What services does Utkal Group offer?",
    answer:
      "Utkal Group provides a diverse range of services across 18+ specialized companies, including facility management, security services, real estate development, green energy solutions, IT services, payroll management, and much more. We serve various industries with comprehensive business solutions.",
  },
  {
    id: 2,
    question: "What industries does Utkal Group primarily serve?",
    answer:
      "Utkal Group serves a wide range of industries, including construction, infrastructure, manufacturing, healthcare, education, hospitality, corporate offices, residential complexes, and environmental services. Our diverse portfolio allows us to cater to virtually any industry requirement.",
  },
  {
    id: 3,
    question: "How can I contact Utkal Group for inquiries?",
    answer:
      "You can reach Utkal Group through multiple channels: our website contact form, email at info@utkalgroup.com, customer service phone line, or visit our offices in Delhi (headquarters) and Bhubaneswar (regional office). We also provide 24/7 support for existing clients.",
  },
  {
    id: 4,
    question: "Does Utkal Group provide 24/7 support?",
    answer:
      "Yes, Utkal Group provides 24/7 support services, especially for our facility management, security services, and critical business operations. Our round-the-clock support ensures that your business operations continue smoothly without any interruptions.",
  },
  {
    id: 5,
    question: "Is Utkal Group involved in sustainable practices?",
    answer:
      "Utkal Group is committed to sustainable practices across all our operations. We have a 50MW solar plant through Utkal Power, follow environmental guidelines in all projects, and ensure minimal ecological impact. Sustainability is a core part of our business philosophy.",
  },
  {
    id: 6,
    question: "What is the coverage area of Utkal Group services?",
    answer:
      "Utkal Group operates on a PAN India basis, covering over 50+ cities across the country. Our headquarters is in Delhi with a regional office in Bhubaneswar, and we have operations and partnerships across major Indian cities to serve our clients effectively.",
  },
  {
    id: 7,
    question: "How many companies are part of Utkal Group?",
    answer:
      "Utkal Group consists of 18+ specialized companies, each focusing on different business verticals. These include Utkal Homes, Utkal Power, Z Plus Security, Utkal Facility, IndoPlus, Utkal Foundation, Ayushman Foundation, and many more, providing comprehensive business solutions.",
  },
  {
    id: 8,
    question: "What makes Utkal Group different from competitors?",
    answer:
      "Utkal Group stands out due to our comprehensive approach - we're not just a single service provider but a complete business solutions ecosystem. With 18+ specialized companies, 24/7 support, PAN India operations, and over 15 years of experience, we offer unmatched reliability and expertise.",
  },
  {
    id: 9,
    question: "Does Utkal Group provide customized solutions?",
    answer:
      "Yes, we specialize in providing customized solutions tailored to each client's specific requirements. Our diverse portfolio of companies allows us to create integrated solutions that address multiple business needs simultaneously, ensuring maximum efficiency and cost-effectiveness.",
  },
  {
    id: 10,
    question: "How can I become a partner or vendor with Utkal Group?",
    answer:
      "We welcome partnerships and vendor relationships. Please contact our business development team through our website or email us at business@utkalgroup.com with your company profile and service offerings. We evaluate partnerships based on quality, reliability, and alignment with our values.",
  },
]

const categories = [
  { name: "All", count: faqData.length },
  { name: "Services", count: 4 },
  { name: "Support", count: 3 },
  { name: "Business", count: 3 },
];

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id:any) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <Box>

      {/* Content Section */}
      <Box sx={{ py: 10, bgcolor: "grey.100" }}>
        <Box sx={{ display: "flex", gap: 4, px: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {/* Sidebar */}
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Categories
              </Typography>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  fullWidth
                  variant={selectedCategory === category.name ? "contained" : "text"}
                  onClick={() => setSelectedCategory(category.name)}
                  sx={{ justifyContent: "space-between", mb: 1 }}
                >
                  {category.name} <span>({category.count})</span>
                </Button>
              ))}
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Still have questions?</Typography>
              <Box sx={{ mt: 2 }}>
                <Button startIcon={<ChatBubbleOutline />} fullWidth variant="outlined" sx={{ mb: 1 }}>
                  Live Chat
                </Button>
                <Button startIcon={<Phone />} fullWidth variant="outlined" sx={{ mb: 1 }}>
                  Call Support
                </Button>
                <Button startIcon={<Email />} fullWidth variant="outlined">
                  Email Us
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* FAQ Content */}
          <Box sx={{ flex: 1, maxWidth: 800 }}>
            {filteredFAQs.length > 0 ? (
              <List>
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <ListItem button onClick={() => toggleFAQ(faq.id)}>
                        <ListItemText primary={faq.question} />
                        <IconButton>
                          {openFAQ === faq.id ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </ListItem>
                      {openFAQ === faq.id && (
                        <Box sx={{ mt: 2 }}>
                          <Divider />
                          <Typography variant="body2" sx={{ mt: 2 }}>
                            {faq.answer}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </List>
            ) : (
              <Card>
                <CardContent sx={{ textAlign: "center", py: 8 }}>
                  <SearchIcon fontSize="large" sx={{ mb: 2, color: "grey.400" }} />
                  <Typography variant="h6" gutterBottom>
                    No results found
                  </Typography>
                  <Typography variant="body2">Try adjusting your search terms.</Typography>
                </CardContent>
              </Card>
            )}
          </Box>
        </Box>
      </Box>

      {/* Contact CTA */}
      <Box sx={{ py: 10, bgcolor: "white", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Did not find what you are looking for?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Our support team is here to help. Get in touch with us for personalized assistance.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large">
            Contact Support
          </Button>
          <Button variant="outlined" size="large">
            Schedule a Call
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
