import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Full Name: {formData.fullname}</Text>
        <Text>Email: {formData.email}</Text>
        {/* Add other form fields here */}
      </View>
    </Page>
  </Document>
);

export default PdfDocument;