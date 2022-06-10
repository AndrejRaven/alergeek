import {
  Button,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  FormControl
} from 'react-bootstrap';
import { useEffect, useState } from "react";
import useBooksService from "../services/BooksService";
import InputWrapper from './InputWraper';
import NumberInputWrapper from './NumberInputWrapper';

const Filters = ({ onRequest, setBookList, setPageNumber, setFilters, count }) => {
  const [lang, setLang] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [minDownloads, setMinDownloads] = useState('');
  const [maxDownloads, setMaxDownloads] = useState('');
  const [bookshelf, setBookshelf] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [agentType, setAgentType] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentAlias, setAgentAlias] = useState('');
  const [agentWebpage, setAgentWebpage] = useState('');
  const [agentBirthDateMin, setAgentBirthDateMin] = useState('');
  const [agentDeathDateMin, setAgentDeathDateMin] = useState('');
  const [agentBirthDateMax, setAgentBirthDateMax] = useState('');
  const [agentDeathDateMax, setAgentDeathDateMax] = useState('');
  const [langs, setLangs] = useState([]);
  const { getAllLanguages, loading } = useBooksService();

  const stringFilter = `type=Text
                        &languages=${lang}
                        &title_contains=${searchTitle}
                        &description_contains=${searchDescription}
                        &downloads_range_min=${minDownloads}
                        &downloads_range_max=${maxDownloads}
                        &has_bookshelf=${bookshelf}
                        &has_resource_type=${resourceType}
                        &has_agent_type=${agentType}
                        &agent_name_contains=${agentName}
                        &agent_alias_contains=${agentAlias}
                        &agent_webpage_contains=${agentWebpage}
                        &agent_birth_date_range_min=${agentBirthDateMin}
                        &agent_birth_date_range_max=${agentBirthDateMax}
                        &agent_death_date_range_min=${agentDeathDateMin}
                        &agent_death_date_range_max=${agentDeathDateMax}
                        `;

  useEffect(() => {
    getAllLanguages().then(onLangsLoaded);
  }, []);

  const onLangsLoaded = (langs) => {
    setLangs(langs)
  }

  function renderItems(arr) {
    const langs = arr.map(lang => {
      return (
        <option key={lang.value} value={lang.value}>{lang.name}</option>
      )
    })
    return (
      <datalist id="datalistOptions">
        {langs}
      </datalist>
    )
  };

  const onSearch = () => {
    setBookList([]);
    setPageNumber(1);
    setFilters(stringFilter.replace(/\s/g, ''))
    onRequest(1, true, stringFilter.replace(/\s/g, ''));
  }

  const content = renderItems(langs)
  const languages = langs && !loading ? content : null;

  return (
    <Container>
      <Form className="mb-3">
        <Row className="mb-2">
          <InputWrapper placeholder="Search by Author alias" seterFunction={setAgentAlias} labelText='Search by alias' />
          <InputWrapper placeholder="Search by Author name" seterFunction={setAgentName} labelText='Search by Author' />
          <InputWrapper placeholder="Search by book title" seterFunction={setSearchTitle} labelText='Search by title' />
        </Row>
        <Row className="mb-2">
          <InputWrapper placeholder="Search by book description" seterFunction={setSearchDescription} labelText='Search by description' />
          <Form.Group as={Col} md="3">
            <h5>Search by language</h5>
            <FormControl list="datalistOptions" id="languagesDataList" onBlur={(e) => setLang(e.target.value)} placeholder="Language" />
            {languages}
          </Form.Group>
        </Row>
        <Row>
          <NumberInputWrapper header='Search by downloads' seterFunctionFrom={setMinDownloads} seterFunctionTo={setMaxDownloads} />
          <NumberInputWrapper header='Search by agent birth date' seterFunctionFrom={setAgentBirthDateMin} seterFunctionTo={setAgentBirthDateMax} />
          <NumberInputWrapper header='Search by agent death date' seterFunctionFrom={setAgentDeathDateMin} seterFunctionTo={setAgentDeathDateMax} />
        </Row>
        <InputGroup className='my-3'>
          <Button variant="primary" size="lg"
                    onClick={() => onSearch()}
          >Search</Button>
        </InputGroup>
      </Form>
      <span>There is {count} books found</span>
    </Container>
  )
}

export default Filters;