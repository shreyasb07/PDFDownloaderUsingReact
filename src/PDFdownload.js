import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default class PDFdownload extends React.Component{
  render(){
    // Create Document Component
    const MyDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );
    return ( 
      <div className="wrap">
      <h1>Test</h1>
     
     
    
     <PDFDownloadLink document={MyDocument} fileName="somename.pdf">
{({ blob, url, loading, error }) => (
  loading ? 'Loading document...' : 'Download now!'
)}
</PDFDownloadLink>
      </div>
    )
  }
}








