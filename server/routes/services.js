const express = require('express');
const router = express.Router();

const services = [
    {
        id: 'health-safety',
        title: 'Health & Safety Services',
        items: [
            'Health & Safety Consultancy',
            'Risk Assessments',
            'Safety Audits',
            'Safety Statements',
            'Site Inspections',
            'Toolbox Talks',
            'Workplace Compliance'
        ]
    },
    {
        id: 'environmental',
        title: 'Environmental Services',
        items: [
            'Environmental Consultancy',
            'Environmental Audits',
            'Waste Management Advice',
            'Climate Change Awareness',
            'Sustainability Consultancy',
            'Environmental Compliance',
            'Community Environmental Projects & Clean-up Campaigns',
            'Litter Collection Programmes'
        ]
    },
    {
        id: 'facility',
        title: 'Facility Services',
        items: [
            'Commercial Cleaning',
            'Office Cleaning',
            'End of Tenancy Cleaning',
            'Facilities Support Services',
            'Maintenance Coordination',
            'Property Condition Reports'
        ]
    },
    {
        id: 'property',
        title: 'Property Services',
        items: [
            'Property Inspections',
            'Compliance Audits',
            'Report Writing',
            'Regulatory Compliance',
            'Declarations & Certificates'
        ]
    }
];

router.get('/', (req, res) => {
    res.json(services);
});

module.exports = router;
