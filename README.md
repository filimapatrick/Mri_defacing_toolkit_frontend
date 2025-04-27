# MRI Anonymization & Defacing Toolkit

A modern web-based toolkit for secure, privacy-preserving processing of MRI data. This project enables users to upload DICOM files, send them to a backend for automated defacing and anonymization, and retrieve processed NIfTI files—helping researchers and clinicians protect patient privacy while maintaining data utility for neuroimaging analysis.

## Features

- **Drag-and-drop DICOM upload** via a user-friendly React frontend
- **Automated backend processing** for defacing and anonymization
- **Downloadable NIfTI outputs** for research and analysis
- **Batch processing** and real-time status dashboard
- **Extensible architecture** for integration with other neuroimaging pipelines

## Why Defacing and Anonymization?

MRI scans often contain facial features that can be reconstructed and potentially re-identified. Defacing and anonymization are critical for:
- **Protecting patient privacy** in compliance with HIPAA and GDPR
- **Enabling open data sharing** in neuroimaging research
- **Reducing risk of re-identification** by removing or masking facial structures

## Scientific Background

Defacing and anonymization are active areas of research. The following papers provide foundational and state-of-the-art insights:

- **A reproducibility evaluation of the effects of MRI defacing on brain segmentation**  
  [Gao et al., 2023, Journal of Medical Imaging](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10246049/)  
  _Compares multiple defacing algorithms and their impact on downstream brain segmentation._

- **Modified MRI Anonymization (De-Facing) for Improved MEG Coregistration**  
  [Bruña et al., 2022, Bioengineering](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9598466/)  
  _Proposes a new de-facing method that preserves the nose for better MEG/EEG coregistration._

- **Systematic evaluation of the impact of defacing on quality and volumetric assessments on T1-weighted MR-images**  
  [Bhalerao et al., 2022, Journal of Neuroradiology](https://pubmed.ncbi.nlm.nih.gov/33861913/)  
  _Assesses how defacing affects image quality and volumetric measurements._

- **Identification of Anonymous MRI Research Participants with Face-Recognition Software**  
  [Schwarz et al., 2019, NEJM](https://www.nejm.org/doi/full/10.1056/NEJMc1908881)  
  _Demonstrates the risk of re-identification from MRI data and the need for robust anonymization._

## Usage

### 1. Start the Backend

Ensure your backend server is running and accessible (default: `http://localhost:8000`). The backend should expose a `/deface/` endpoint that accepts DICOM files and returns processed NIfTI file URLs.

### 2. Start the Frontend

```bash
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Upload and Process Files

- Drag and drop `.dcm` files or use the file picker.
- Click **Process** to send files to the backend.
- Download the anonymized NIfTI files from the dashboard.

## Architecture

- **Frontend:** React + TypeScript
- **Backend:** Python (FastAPI recommended, but any framework with a compatible API will work)
- **Communication:** REST API with multipart file upload

## Example Backend Response

```json
{
  "success": true,
  "message": "File processed successfully",
  "data": {
    "processedFileUrl": "http://localhost:8000/files/processed/example.nii.gz",
    "originalFileUrl": "http://localhost:8000/files/original/example.dcm"
  }
}
```

## References & Further Reading

- [A reproducibility evaluation of the effects of MRI defacing on brain segmentation (Gao et al., 2023)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10246049/)
- [Modified MRI Anonymization (De-Facing) for Improved MEG Coregistration (Bruña et al., 2022)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9598466/)
- [Systematic evaluation of the impact of defacing on quality and volumetric assessments on T1-weighted MR-images (Bhalerao et al., 2022)](https://pubmed.ncbi.nlm.nih.gov/33861913/)
- [Identification of Anonymous MRI Research Participants with Face-Recognition Software (Schwarz et al., 2019)](https://www.nejm.org/doi/full/10.1056/NEJMc1908881)

## License

MIT License

---

**For questions or contributions, please open an issue or pull request!**
